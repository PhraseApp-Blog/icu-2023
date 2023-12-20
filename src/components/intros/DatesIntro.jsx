import SectionIntro from "../layout/SectionIntro";

export default function DatesIntro() {
  return (
    <SectionIntro
      header="Dates"
      description={
        <>
          The ICU <code>date</code> format is used to format numbers as strings.
          The ICU standard provides a lot of flexibility in how you{" "}
          <a
            href="https://unicode-org.github.io/icu/userguide/format_parse/datetime/#datetime-format-syntax"
            target="_blank"
            rel="noreferrer"
          >
            format numbers
          </a>
          . React Intl, which we&apos;re using in this app, only supports a{" "}
          <a
            href="https://formatjs.io/docs/core-concepts/icu-syntax#supported-datetime-skeleton"
            target="_blank"
            rel="noreferrer"
          >
            subset of these date skeletons.
          </a>
        </>
      }
      thingsToTry={[
        "Change the value of the `aDate` variable to any date",
        "Change the active locale from the locale switcher and see how the date is formatted differently",
        "Change the date skeleton to format the number differently",
      ]}
    />
  );
}
