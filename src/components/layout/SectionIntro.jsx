import PropTypes from "prop-types";

SectionIntro.propTypes = {
  header: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  thingsToTry: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default function SectionIntro({ header, description, thingsToTry }) {
  return (
    <>
      <h2 className="mt-4 text-2xl font-semibold">{header}</h2>

      <p className="mt-4 text-sm">{description}</p>

      <h3 className="mt-4 font-semibold text-purple-300">Try the following</h3>

      <ul className="ml-4 list-outside list-disc text-purple-300">
        {thingsToTry.map((thingToTry) => (
          <li key={thingToTry}>{thingToTry}</li>
        ))}
      </ul>
    </>
  );
}
