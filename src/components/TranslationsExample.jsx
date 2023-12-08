import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import rtlDetect from "rtl-detect";
import LocaleSwitcher from "./layout/LocaleSwitcher";

TranslationsExample.propTypes = {
  locale: PropTypes.string.isRequired,
  onLocaleChanged: PropTypes.func.isRequired,
};

const messages = {
  "en-US": "Hello, world!",
  "fr-FR": "Bonjour, monde!",
  "zh-CN": "你好，世界！",
  "es-ES": "Hola, mundo!",
  "hi-IN": "नमस्ते दुनिया!",
  "bn-BD": "হ্যালো, বিশ্ব!",
  "pt-BR": "Olá Mundo!",
  "ru-RU": "Привет, мир!",
  "ja-JP": "こんにちは世界！",
  "pnb-PK": "ہیلو دنیا!",
  "mr-IN": "नमस्कार जग!",
  "ar-SA": "مرحبا بالعالم!",
  "id-ID": "Halo dunia!",
};

export default function TranslationsExample({ locale, onLocaleChanged }) {
  return (
    <div className="mt-2 flex justify-between gap-12">
      <div className="flex-1">
        <h3 className="my-2 text-xl font-medium">Active locale</h3>

        <LocaleSwitcher
          locale={locale}
          onLocaleChanged={onLocaleChanged}
          showLabel={false}
        />
      </div>

      <div className="flex-1">
        <h3 className="mt-2 block text-xl font-medium">Output</h3>

        <p
          className="mt-2 min-h-[80px] rounded-sm bg-black/50 p-4"
          dir={rtlDetect.getLangDir(locale)}
        >
          <FormattedMessage id="id" defaultMessage={messages[locale]} />
        </p>
      </div>
    </div>
  );
}
