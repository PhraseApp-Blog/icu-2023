import { parse } from "@formatjs/icu-messageformat-parser";
import { nanoid } from "nanoid";
import { useState } from "react";
import { FormattedMessage } from "react-intl";

function variablesFor(message) {
  try {
    const ast = parse(message);
    console.log({ ast });
    const variables = ast
      .map((node) => [1, 6].includes(node.type) && node.value)
      .filter(Boolean);
    return [variables, null];
  } catch (e) {
    console.error(e);
    return [[], e.message];
  }
}

export default function MessagePlayground() {
  const id = nanoid(10);
  const [message, setMessage] = useState("Hello, {name}!");
  const [variables, parsingError] = variablesFor(message);
  const [values, setValues] = useState(
    variables.reduce((acc, cur) => {
      acc[cur] = `{${cur}}`;
      return acc;
    }, {}),
  );

  return (
    <div className="mt-2 flex justify-between gap-12">
      <div className="flex-1">
        <label
          htmlFor={`${id}-message`}
          className="mt-2 block text-xl font-medium"
        >
          Message
        </label>
        <textarea
          id={`${id}-message`}
          className="mt-2 w-full rounded-sm bg-indigo-50 p-2 text-indigo-950"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <h4 className="mt-3 block text-lg">Variables</h4>
        {/* Map variables to labeled inputs */}
        {variables.map((variable) => (
          <div key={variable} className="mt-2 flex items-center gap-2">
            <label htmlFor={variable} className="basis-28 font-semibold">
              {variable}
            </label>
            <input
              id={variable}
              className="flex-grow rounded-sm bg-indigo-50 p-2 text-indigo-950"
              placeholder={variable}
              value={values[variable] || ""}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, [variable]: e.target.value }))
              }
            />
          </div>
        ))}
      </div>

      <div className="flex-1">
        <h3 className="mt-2 block text-xl font-medium">Output</h3>

        <p className="mt-2 min-h-[80px] rounded-sm bg-black/50 p-4">
          {parsingError ? (
            <span className="text-red-400">
              Invalid message: {parsingError}
            </span>
          ) : (
            <FormattedMessage
              id={message || "..."}
              defaultMessage={message || "..."}
              values={values}
            />
          )}
        </p>
      </div>
    </div>
  );
}
