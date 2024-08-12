import useBoundStore from "~/store";

const useFilters = () => {
  const filteredBooks = useBoundStore((state) => state.filteredBooks);
  const filterGenre = useBoundStore((state) => state.filterGenre);
  const filterSection = useBoundStore((state) => state.filterSection);

  const setFilterGenre = useBoundStore((state) => state.setFilterGenre);
  const setFilterSection = useBoundStore((state) => state.setFilterSection);

  return {
    filteredBooks,
    filterGenre,
    filterSection,
    setFilterGenre,
    setFilterSection,
  };
};

export default useFilters;
