import { parse } from "@formatjs/icu-messageformat-parser";

function extractVariables(node) {
  let variables = [];

  if (node.type === 1 || node.type === 6) {
    variables.push({
      name: node.value,
      type: node.type === 1 ? "string" : "number",
    });
  }

  if (node.type === 6 && node.options) {
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
