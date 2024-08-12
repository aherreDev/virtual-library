import useFilters from "~/hooks/useFilters";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const { setFilterSection } = useFilters();

  return (
    <header className={classes.navbar}>
      <h2 className="title is-2 has-text-primary mb-0">Virtual Library</h2>

      <button
        className="button is-primary"
        onClick={() => setFilterSection("saved")}
      >
        My reading list
      </button>
    </header>
  );
};

export default Navbar;
