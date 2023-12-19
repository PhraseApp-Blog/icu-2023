import SectionIntro from "../layout/SectionIntro";

export default function SelectIntro() {
  return (
    <SectionIntro
      header="Select"
      description="The select format is used to match a value to a string. This is often used for gendered pronouns, but is not exclusive to gender. In fact, the select format is much like a switch statement in programming languages. It can be used to match any value to a string."
      thingsToTry={[
        "Change the value of the `gender` variable",
        "Change the active locale from the locale switcher above and add a message with the gender pronouns for that locale",
        "Pick something other than gender and use that in a message with the select format",
      ]}
    />
  );
}
