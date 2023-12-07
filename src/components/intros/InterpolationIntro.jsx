import SectionIntro from "../layout/SectionIntro";

export default function InterpolationIntro() {
  return (
    <SectionIntro
      header="Interpolation"
      description="Arguably the most important component of ICU is the message format. It allows you to create messages that can be translated into different languages. You can also interpolate runtime variables into your messages."
      thingsToTry={[
        "Add your name as the value of the `name` variable",
        "Change the message to `Hello {firstName} {lastName}!` and fill in the values for `firstName` and `lastName`",
      ]}
    />
  );
}
