import PropTypes from "prop-types";

SectionIntro.propTypes = {
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thingsToTry: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function SectionIntro({ header, description, thingsToTry }) {
  return (
    <>
      <h2 className="mt-4 text-2xl font-semibold">{header}</h2>

      <p className="mt-4 text-sm">{description}</p>

      <p className="mt-4 text-purple-300">Try the following:</p>

      <ul className="ml-4 list-outside list-disc text-purple-300">
        {thingsToTry.map((thingToTry) => (
          <li key={thingToTry}>{thingToTry}</li>
        ))}
      </ul>
    </>
  );
}
