import { useMemo } from "react";

import useBooks from "~/hooks/useBooks";
import useFilters from "~/hooks/useFilters";
import useReadingList from "~/hooks/useReadingList";

import BookCard from "../BookCard/BookCard";
import BooksListFilters from "../BooksListFilters/BooksListFilters";

const BooksList = () => {
  const { isLoading } = useBooks();
  const { readingList } = useReadingList();
  const { filteredBooks: books } = useFilters();

  const gridClass =
    "fixed-grid has-2-cols-mobile has-3-cols-tablet has-4-cols-desktop has-4-cols is-flex-grow-1";

  const readingListISBNs = useMemo(
    () => readingList.map((book) => book.ISBN),
    [readingList]
  );

  return (
    <div className="is-flex px-5">
      {isLoading ? (
        <p data-testid="books-loading">Loading...</p>
      ) : (
        <>
          <div>
            <BooksListFilters />
          </div>
          <div className={gridClass} data-testid="books-list">
            <div className="grid">
              {books.map((book, i) => (
                <div className="cell" key={`${book.ISBN}-${i}`}>
                  <BookCard
                    data-testid={`book-${book.ISBN}`}
                    book={book}
                    isOnReadingList={readingListISBNs.includes(book.ISBN)}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BooksList;
