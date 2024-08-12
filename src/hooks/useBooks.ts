import { useEffect, useState } from "react";

import useBoundStore from "~/store";
import { fetchBooks } from "~/utils";

const useBooks = () => {
  // const { data, error, loading } = useQuery(GET_BOOKS);
  const [isLoading, setIsLoading] = useState(false);
  const books = useBoundStore((state) => state.books);
  const setBooks = useBoundStore((state) => state.setBooks);

  const runFiltersUpdate = useBoundStore((state) => state.runFiltersUpdate);

  const initializeBooksList = async () => {
    setIsLoading(true);
    const data = await fetchBooks();
    setBooks(data);
    setIsLoading(false);
  };

  useEffect(() => {
    initializeBooksList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    runFiltersUpdate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [books]);

  return { books, isLoading };
};

export default useBooks;
