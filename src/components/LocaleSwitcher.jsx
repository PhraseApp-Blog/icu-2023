import PropTypes from "prop-types";
import locales from "../lib/locales";

LocaleSwitcher.propTypes = {
  locale: PropTypes.string.isRequired,
  onLocaleChanged: PropTypes.func.isRequired,
};

export default function LocaleSwitcher({ locale, onLocaleChanged }) {
  return (
    <div className="flex items-baseline justify-end gap-2">
      <label
        htmlFor="locale"
        className="block text-sm font-medium text-indigo-800"
      >
        Active locale
      </label>
      <select
        id="locale"
        value={locale}
        onChange={(e) => onLocaleChanged(e.target.value)}
        className=" rounded-lg border border-indigo-300 bg-indigo-50 p-2.5 text-sm text-indigo-950 focus:border-purple-500 focus:ring-purple-500"
      >
        {locales.map((locale) => (
          <option key={locale.code} value={locale.code}>
            {locale.defaultName}
          </option>
        ))}
      </select>
    </div>
  );
}
