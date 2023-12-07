import { useState } from "react";
import { IntlProvider } from "react-intl";
import InterpolationIntro from "./components/InterpolationIntro";
import MessagePlayground from "./components/MessagePlayground";
import PluralsIntro from "./components/PluralsIntro";
import Header from "./components/layout/Header";
import LocaleSwitcher from "./components/layout/LocaleSwitcher";
import Main from "./components/layout/Main";
import Section from "./components/layout/Section";
import id from "./lib/id";

function App() {
  const [activeLocale, setActiveLocale] = useState("en-US");

  return (
    <IntlProvider
      locale={activeLocale}
      defaultLocale={activeLocale}
      onError={(err) => console.warn(err)}
    >
      <Header
        right={
          <LocaleSwitcher
            locale={activeLocale}
            onLocaleChanged={(loc) => setActiveLocale(loc)}
          />
        }
      />

      <Main>
        {/* Interpolation */}
        <Section>
          <InterpolationIntro />
          <MessagePlayground id={id()} initialMessage="Hello, {name}!" />
        </Section>

        {/* Plurals */}
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
      </Main>
    </IntlProvider>
  );
}

export default App;
