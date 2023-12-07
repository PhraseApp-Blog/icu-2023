export default function InterpolationIntro() {
  return (
    <>
      <h2 className="mt-4 text-2xl font-semibold">Interpolation</h2>

      <p className="mt-4 text-sm">
        Arguably the most important component of ICU is the message format. It
        allows you to create messages that can be translated into different
        languages. You can also interpolate runtime variables into your
        messages.
      </p>

      <p className="mt-4 text-purple-300">Try the following:</p>

      <ul className="ml-4 list-outside list-disc text-purple-300">
        <li>
          Add your name as the value of the <code>name</code> variable
        </li>
        <li>
          Change the message to{" "}
          <code>
            Hello {"{"}firstName{"}"} {"{"}lastName{"}"}!
          </code>
        </li>
      </ul>
    </>
  );
}
