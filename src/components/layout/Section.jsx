import PropTypes from "prop-types";

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Section({ children }) {
  return (
    <section className="mt-8 border-t-[0.5px] border-purple-400">
      {children}
    </section>
  );
}
