import { nanoid } from "nanoid";
import { useState } from "react";
import { IntlProvider } from "react-intl";
import InterpolationIntro from "./components/InterpolationIntro";
import LocaleSwitcher from "./components/LocaleSwitcher";
import MessagePlayground from "./components/MessagePlayground";
import PluralsIntro from "./components/PluralsIntro";
import Section from "./components/layout/Section";

function id() {
  return nanoid(10);
}

function App() {
  const [activeLocale, setActiveLocale] = useState("en-US");

  return (
    <IntlProvider locale={activeLocale} defaultLocale={activeLocale}>
      <header className="h-15 fixed inset-x-0 top-0  bg-indigo-100/95 text-indigo-950">
        <div className="mx-auto flex max-w-[800px] items-baseline justify-between p-2">
          <h1 className="text-2xl font-bold">ICU Playground</h1>
          <div className="w-[350px]">
            <LocaleSwitcher
              locale={activeLocale}
              onLocaleChanged={(loc) => setActiveLocale(loc)}
            />
          </div>
        </div>
      </header>

      <main className="mx-auto mt-16 max-w-[800px] rounded-md border-t-2 border-purple-500 bg-black/20 px-6 pb-24 pt-0">
        <p className="mt-4 text-xl font-thin">
          This is an interactive demo that showcases the capabilities of ICU
          (International Components for Unicode).
        </p>

        <Section>
          <InterpolationIntro />
          <MessagePlayground id={id()} initialMessage="Hello, {name}!" />
        </Section>

        <Section>
          <PluralsIntro />
          <MessagePlayground
            id={id()}
            rows={5}
            initialMessage={`{count, plural,
  one {You have # message.}
  other {You have # messages.}
}`}
          />
        </Section>
      </main>
    </IntlProvider>
  );
}

export default App;
