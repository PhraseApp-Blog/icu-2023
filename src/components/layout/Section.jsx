import PropTypes from "prop-types";

Section.propTypes = {
  children: PropTypes.node.isRequired,
  hasBorder: PropTypes.bool,
};

export default function Section({ children, hasBorder = true }) {
  return (
    <section
      className={`mt-8 ${hasBorder && "border-t-[0.5px] border-purple-400"}`}
    >
      {children}
    </section>
  );
}
