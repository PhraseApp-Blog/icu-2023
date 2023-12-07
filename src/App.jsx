import { nanoid } from "nanoid";
import { IntlProvider } from "react-intl";
import InterpolationIntro from "./components/InterpolationIntro";
import MessagePlayground from "./components/MessagePlayground";
import PluralsIntro from "./components/PluralsIntro";

function id() {
  return nanoid(10);
}

function App() {
  return (
    <IntlProvider locale="en-US" defaultLocale="en-US">
      <main className="mx-auto max-w-[800px] rounded-md border-t-2 border-indigo-500 bg-black/20 px-6 pb-24 pt-6">
        <h1 className="text-4xl font-bold">ICU Demo</h1>
        <p className="mt-4 text-xl font-thin">
          This is an interactive demo that showcases the capabilities of ICU
          (International Components for Unicode).
        </p>

        <hr className="mt-4 h-[0.5px] border-0 bg-purple-400" />

        <InterpolationIntro />
        <MessagePlayground id={id()} initialMessage="Hello, {name}!" />

        <hr className="mt-8 h-[0.5px] border-0 bg-purple-400" />

        <PluralsIntro />
        <MessagePlayground
          id={id()}
          rows={5}
          initialMessage={`{count, plural,
  one {You have # message.}
  other {You have # messages.}
}`}
        />
      </main>
    </IntlProvider>
  );
}

export default App;
