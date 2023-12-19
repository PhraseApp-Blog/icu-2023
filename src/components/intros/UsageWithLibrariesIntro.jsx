import SectionIntro from "../layout/SectionIntro";

export default function UsageWithLibrariesIntro() {
  return (
    <SectionIntro
      header="Usage with libaries"
      description={
        <>
          We often use the ICU today in our libraries. For example, the{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://formatjs.io/docs/react-intl/"
          >
            react-intl
          </a>{" "}
          library uses the ICU to format its translation messages. (We&apos;ve
          using react-intl under the hood to create this demo).{" "}
        </>
      }
      thingsToTry={[
        "Change the active locale from the dropdown to see the output below in various translations.",
      ]}
    />
  );
}
