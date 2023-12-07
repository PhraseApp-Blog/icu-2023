export default function PluralsIntro() {
  return (
    <>
      <h2 className="mt-4 text-2xl font-semibold">Plurals</h2>

      <p className="mt-4 text-sm">
        A powerful feature of ICU is its ability to handle pluralization. The
        ICU message format can handle simple pluralization (one/other) as well
        as complex pluralization rules.
      </p>

      <p className="mt-4 text-sm">
        🔗 Get the plural forms for all languages from the{" "}
        <a
          href="https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html"
          target="_blank"
          rel="noreferrer"
          className="text-purple-400 underline"
        >
          CLDR listing
        </a>
        .
      </p>

      <p className="mt-4 text-purple-300">Try the following:</p>

      <ul className="ml-4 list-outside list-disc text-purple-300">
        <li>
          Change the value of the <code>count</code> variable
        </li>
        <li>
          Change the language from the language switcher above and add a message
          with all the plural forms for that language.
        </li>
        <li>
          Add variables to each plural form e.g.{" "}
          <code>
            You have # messages, {"{"}name{"}"}!
          </code>
        </li>
      </ul>
    </>
  );
}
