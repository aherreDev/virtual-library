import useFilters from "~/hooks/useFilters";

const PageSections = () => {
  const { filterSection: currentSection, setFilterSection: setCurrentSection } =
    useFilters();

  const isAll = currentSection === "all";
  const isAvailable = currentSection === "available";
  const isSaved = currentSection === "saved";

  const allTagClass = isAll ? "is-primary" : "is-clickable is-secondary";
  const availableTagClass = isAvailable
    ? "is-primary"
    : "is-clickable is-secondary";
  const savedTagClass = isSaved ? "is-primary" : "is-clickable is-secondary";

  return (
    <div className="is-flex is-align-items-baseline">
      <div className="tags has-addons mx-2">
        <span
          className={`tag is-large ${allTagClass}`}
          onClick={() => setCurrentSection("all")}
        >
          All Books
        </span>
      </div>

      <div className="tags has-addons mx-2">
        <span
          className={`tag is-large ${availableTagClass}`}
          onClick={() => setCurrentSection("available")}
        >
          Available Books
        </span>
        {isAvailable && (
          <a
            className="tag is-delete is-large"
            onClick={() => setCurrentSection("all")}
          ></a>
        )}
      </div>

      <div className="tags has-addons mx-2">
        <span
          className={`tag is-large ${savedTagClass}`}
          onClick={() => setCurrentSection("saved")}
        >
          My Reading List
        </span>
        {isSaved && (
          <a
            className="tag is-delete is-large"
            onClick={() => setCurrentSection("all")}
          ></a>
        )}
      </div>
    </div>
  );
};

export default PageSections;
