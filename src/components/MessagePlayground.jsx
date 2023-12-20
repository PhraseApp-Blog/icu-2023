import PropTypes from "prop-types";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import parseValues from "../lib/parse-values";
import variablesFor from "../lib/variables-for";

MessagePlayground.propTypes = {
  id: PropTypes.string.isRequired,
  initialMessage: PropTypes.string,
  rows: PropTypes.number,
};

export default function MessagePlayground({
  id,
  initialMessage = "",
  rows = 3,
}) {
  const [message, setMessage] = useState(initialMessage);

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
          rows={rows}
          className="mt-2 w-full rounded-sm bg-indigo-50 p-2 text-indigo-950"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        {variables.length > 0 && (
          <h4 className="mt-3 block text-lg">Variables</h4>
        )}

        {variables.map(({ name, type }) => (
          <div
            key={`${id}-var-${name}`}
            className="mt-2 flex items-center gap-2"
          >
            <label htmlFor={`${id}-${name}`} className="basis-28 font-semibold">
              {name}
            </label>

            <input
              id={`${id}-${name}`}
              type={type}
              className="flex-grow rounded-sm bg-indigo-50 p-2 text-indigo-950"
              placeholder={type === "number" ? "0" : name}
              value={values[name] || ""}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, [name]: e.target.value }))
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
              values={parseValues(values, variables)}
            />
          )}
        </p>
      </div>
    </div>
  );
}
