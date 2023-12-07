import SectionIntro from "../layout/SectionIntro";

export default function OrdinalsIntro() {
  return (
    <SectionIntro
      header="Ordinals"
      description={
        <>
          The plurals in the previous section are called <em>cardinal</em>{" "}
          plurals. An ordinal is a word that represents the rank of a number,
          e.g. first, second, third. Some languages, like English, have special
          representations for ordinals, e.g. 1st, 2nd, 3rd, 4th.
        </>
      }
      thingsToTry={[
        "Change the value of the `count` variable",
        "Change the active locale from the locale switcher above and add a message with all the ordinal forms for that locale.",
      ]}
    />
  );
}
