import { nanoid } from "nanoid";
import { IntlProvider } from "react-intl";
import MessagePlayground from "./components/MessagePlayground";

function id() {
  return nanoid(10);
}

function App() {
  return (
    <IntlProvider locale="en-US" defaultLocale="en-US">
      <main className="mx-auto max-w-[800px] rounded-md border-t-2 border-indigo-500 bg-black/20 px-6 pt-6">
        <h1 className="text-4xl font-bold">ICU Demo</h1>
        <p className="mt-4 text-xl font-thin">
          This is an interactive demo that showcases the capabilities of ICU
          (International Components for Unicode).
        </p>

        <hr className="mt-4 h-[0.5px] border-0 bg-indigo-400" />

        <h2 className="pt-4 text-2xl font-semibold">Interpolation</h2>
        <p className="mt-4">
          Arguably the most important component of ICU is the message format. It
          allows you to create messages that can be translated into different
          languages. You can also interpolate runtime variables into your
          messages.
        </p>

        <MessagePlayground id={id()} />
      </main>
    </IntlProvider>
  );
}

export default App;
