import { useState } from "react";
import { IntlProvider } from "react-intl";
import MessagePlayground from "./components/MessagePlayground";
import TranslationsExample from "./components/TranslationsExample";
import DatesIntro from "./components/intros/DatesIntro";
import InterpolationIntro from "./components/intros/InterpolationIntro";
import NumbersIntro from "./components/intros/NumbersIntro";
import OrdinalsIntro from "./components/intros/OrdinalsIntro";
import PluralsIntro from "./components/intros/PluralsIntro";
import SelectIntro from "./components/intros/SelectIntro";
import UsageWithLibrariesIntro from "./components/intros/UsageWithLibrariesIntro";
import Footer from "./components/layout/Footer";
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
        {/* Usage in i18n libraries */}
        <Section hasBorder={false}>
          <UsageWithLibrariesIntro />
          <TranslationsExample
            locale={activeLocale}
            onLocaleChanged={(loc) => setActiveLocale(loc)}
          />
        </Section>

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

        {/* Ordinals */}
        <Section>
          <OrdinalsIntro />
          <MessagePlayground
            id={id()}
            rows={6}
            initialMessage={`{count, selectordinal,
  one {We planted our #st tree.}
  two {We planted our #nd tree.}
  few {We planted our #rd tree.}
  other {We planted our #th tree.}
}`}
          />
        </Section>

        {/* Select */}
        <Section>
          <SelectIntro />
          <MessagePlayground
            id={id()}
            rows={6}
            initialMessage={`{gender, select,
male {He}
female {She}
other {They}
} will be with you shortly.`}
          />
        </Section>

        {/* Numbers */}
        <Section>
          <NumbersIntro />
          <MessagePlayground
            id={id()}
            initialMessage="{price, number, ::currency/USD unit-width-narrow K}."
          />
        </Section>

        {/* Dates */}
        <Section>
          <DatesIntro />
          <MessagePlayground
            id={id()}
            initialMessage="{aDate, date, ::dMMMyyyy G HH:mm a zzz}"
          />
        </Section>
      </Main>

      <Footer />
    </IntlProvider>
  );
}

export default App;
