import PropTypes from "prop-types";

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Main({ children }) {
  return (
    <main className="mx-auto mt-16 max-w-[800px] rounded-md bg-black/20 px-6 pb-24 pt-1">
      <p className="mt-4 text-xl font-thin">
        This is an interactive demo that showcases the capabilities of ICU
        (International Components for Unicode).
      </p>

      <p className="mt-4 rounded-md bg-indigo-200 p-4 text-purple-950">
        <span className="mr-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-950">
          ✋
        </span>
        If you encounter an error, try refreshing the page.
      </p>

      {children}
    </main>
  );
}
