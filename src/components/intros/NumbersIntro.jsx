import SectionIntro from "../layout/SectionIntro";

export default function NumbersIntro() {
  return (
    <SectionIntro
      header="Numbers"
      description={
        <>
          The ICU <code>number</code> format, which is used to format numbers as
          strings. This is useful for formatting numbers as currency,
          percentages, or just plain numbers. You can use{" "}
          <a href="https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html">
            number skeletons
          </a>
          to customize the format of the number.
        </>
      }
      thingsToTry={[
        "Change the value of the `price` variable to 1200",
        "Change the active locale from the locale switcher and see how the number is formatted differently for each locale",
        "Change the number skeleton to format the number differently",
      ]}
    />
  );
}
