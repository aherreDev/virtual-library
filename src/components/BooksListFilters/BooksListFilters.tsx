import { useMemo } from "react";

import useFilters from "~/hooks/useFilters";
import useBoundStore from "~/store";

const BooksListFilters = () => {
  const books = useBoundStore((state) => state.books);
  const { filterGenre, setFilterGenre } = useFilters();

  const availableFilters = useMemo(() => {
    const genres = new Set<string>();

    books.forEach((book) => {
      genres.add(book.genre);
    });

    return Array.from(genres);
  }, [books]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const genre = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setFilterGenre([...filterGenre, genre]);
    } else {
      setFilterGenre(
        filterGenre.filter((selectedGenre) => selectedGenre !== genre)
      );
    }
  };

  return (
    <div>
      <h2>Filters</h2>

      <div className="is-flex is-flex-direction-column">
        {availableFilters.map((genre) => (
          <label className="checkbox" key={genre}>
            <input
              type="checkbox"
              value={genre}
              onChange={handleFilterChange}
            />
            {genre}
          </label>
        ))}
      </div>
    </div>
  );
};

export default BooksListFilters;
