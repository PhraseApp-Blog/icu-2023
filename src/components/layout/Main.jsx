import PropTypes from "prop-types";

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Main({ children }) {
  return (
    <main className="mx-auto mt-16 max-w-[800px] rounded-md border-t-2 border-purple-500 bg-black/20 px-6 pb-24 pt-0">
      <p className="mt-4 text-xl font-thin">
        This is an interactive demo that showcases the capabilities of ICU
        (International Components for Unicode).
      </p>
      {children}
    </main>
  );
}
