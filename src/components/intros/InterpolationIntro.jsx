import SectionIntro from "../layout/SectionIntro";

export default function InterpolationIntro() {
  return (
    <SectionIntro
      header="Interpolation"
      description="Within a translation message, ICU provides a robust syntax that allows for various kinds of dynamic data. We can, for example, interpolate runtime variables into our messages."
      thingsToTry={[
        "Add your name as the value of the `name` variable",
        "Change the message to `Hello {firstName} {lastName}!` and fill in the values for `firstName` and `lastName`",
      ]}
    />
  );
}
