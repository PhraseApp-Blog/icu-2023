import { parse } from "@formatjs/icu-messageformat-parser";

export default function variablesFor(message) {
  try {
    const ast = parse(message);
    console.log(ast);
    const variables = ast
      .map((node) => {
        switch (node.type) {
          case 1:
            return { name: node.value, type: "string" };
          case 6:
            return { name: node.value, type: "number" };
        }
      })
      .filter(Boolean);

    return [variables, null];
  } catch (e) {
    console.error(e);
    return [[], e.message];
  }
}
