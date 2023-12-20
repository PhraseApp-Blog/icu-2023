import { parse } from "@formatjs/icu-messageformat-parser";

// Node types
const NT_VARIABLE = 1;
const NT_NUMBER = 2;
const NT_DATE = 3;
const NT_SELECT = 5;
const NT_PLURAL = 6;

function extractVariables(node) {
  let variables = [];

  if (
    [NT_VARIABLE, NT_NUMBER, NT_DATE, NT_PLURAL, NT_SELECT].includes(
      node.type,
    ) &&
    node.value
  ) {
    variables.push({
      name: node.value,
      type: {
        [NT_PLURAL]: "number",
        [NT_NUMBER]: "number",
        [NT_DATE]: "date",
        [NT_VARIABLE]: "string",
        [NT_SELECT]: "string",
      }[node.type],
    });
  }

  if ([NT_PLURAL, NT_SELECT].includes(node.type) && node.options) {
    for (let option in node.options) {
      node.options[option].value.forEach((childNode) => {
        variables = variables.concat(extractVariables(childNode));
      });
    }
  }

  return variables;
}

export default function variablesFor(message) {
  try {
    const ast = parse(message);
    let variables = [];

    ast.forEach((node) => {
      variables = variables.concat(extractVariables(node));
    });

    const uniqueVariables = Array.from(
      new Set(variables.map((v) => JSON.stringify(v))),
    ).map((str) => JSON.parse(str));

    return [uniqueVariables, null];
  } catch (e) {
    console.error(e);
    return [[], e.message];
  }
}
