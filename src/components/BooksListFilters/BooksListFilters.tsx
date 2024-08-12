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

  const booksAmountPerGenre = useMemo(() => {
    const booksAmountPerGenre = new Map<string, number>();

    books.forEach((book) => {
      if (booksAmountPerGenre.has(book.genre)) {
        booksAmountPerGenre.set(
          book.genre,
          (booksAmountPerGenre.get(book.genre) || 0) + 1
        );
      } else {
        booksAmountPerGenre.set(book.genre, 1);
      }
    });

    return booksAmountPerGenre;
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
      <h2>Filters - Total ({books.length})</h2>

      <div className="is-flex-desktop is-flex-direction-column">
        {availableFilters.map((genre) => (
          <label className="checkbox mx-2 mx-0-desktop" key={genre}>
            <input
              type="checkbox"
              value={genre}
              onChange={handleFilterChange}
              checked={filterGenre.includes(genre)}
              className="mr-2"
            />
            {genre} - ({booksAmountPerGenre.get(genre)})
          </label>
        ))}
      </div>
    </div>
  );
};

export default BooksListFilters;
