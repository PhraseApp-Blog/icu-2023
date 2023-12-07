import SectionIntro from "../layout/SectionIntro";

export default function PluralsIntro() {
  return (
    <SectionIntro
      header="Plurals"
      description="A powerful feature of ICU is its ability to handle pluralization. The ICU message format can handle simple pluralization (one/other) as well as complex pluralization rules."
      thingsToTry={[
        "Change the value of the `count` variable",
        "Change the active locale from the locale switcher above and add a message with all the plural forms for that locale.",
        "Add variables to each plural form e.g. `You have # messages, {name}!`",
      ]}
    />
  );
}
