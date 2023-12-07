import PropTypes from "prop-types";

Header.propTypes = {
  right: PropTypes.node.isRequired,
};

export default function Header({ right }) {
  return (
    <header className="h-15 fixed inset-x-0 top-0  bg-indigo-200/95 text-indigo-950">
      <div className="mx-auto flex max-w-[800px] items-baseline justify-between p-2">
        <h1 className="text-2xl font-bold">ICU Playground</h1>
        <div className="w-[300px]">{right}</div>
      </div>
    </header>
  );
}
