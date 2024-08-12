import { useEffect, useState } from "react";

import { ApiResponse, Book } from "~/types";
import { apiLibraryItemsToBooks } from "~/utils";

const fetchBooks = async () => {
  try {
    const response = await fetch("/books.json");
    const data: ApiResponse = await response.json();

    const books = apiLibraryItemsToBooks(data.library);

    return books;
  } catch (error) {
    console.error(error);
    return [];
  }
};

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const initializeBooksList = async () => {
    setIsLoading(true);
    const data = await fetchBooks();

    setBooks(data);
    setIsLoading(false);
  };
  useEffect(() => {
    initializeBooksList();
  }, []);

  return (
    <div>
      <h1>Books</h1>

      <div>
        {isLoading ? (
          <p data-testid="books-loading">Loading...</p>
        ) : (
          <ul data-testid="books-list">
            {books.map((book, i) => (
              <li key={`${book.ISBN}-${i}`} data-testid={`book-${book.ISBN}`}>
                {book.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
