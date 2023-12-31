import PropTypes from "prop-types";
import locales from "../../lib/locales";

LocaleSwitcher.propTypes = {
  locale: PropTypes.string.isRequired,
  onLocaleChanged: PropTypes.func.isRequired,
  showLabel: PropTypes.bool,
};

export default function LocaleSwitcher({
  locale,
  onLocaleChanged,
  showLabel = true,
}) {
  return (
    <div className="flex items-baseline justify-end gap-2">
      {showLabel && (
        <label
          htmlFor="locale"
          className="block text-sm font-medium text-indigo-800"
        >
          Active locale
        </label>
      )}

      <select
        id="locale"
        value={locale}
        onChange={(e) => onLocaleChanged(e.target.value)}
        className="has-down-arrow flex-grow appearance-none rounded-md border border-indigo-300 bg-indigo-50 p-1.5 text-sm text-indigo-950 focus:border-indigo-500 focus:outline-none focus:ring-[0.5px] focus:ring-indigo-500"
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
