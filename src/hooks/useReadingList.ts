import useBoundStore from "~/store";
import { Book } from "~/types";

const useReadingList = () => {
  const readingList = useBoundStore((state) => state.readingList);
  const addBookToReadingList = useBoundStore(
    (state) => state.addBookToReadingList
  );
  const removeBookFromReadingList = useBoundStore(
    (state) => state.removeBookFromReadingList
  );
  const runFiltersUpdate = useBoundStore((state) => state.runFiltersUpdate);

  const handleAddBookToReadingList = (book: Book) => {
    addBookToReadingList(book);
    runFiltersUpdate();
  };

  const handleRemoveBookFromReadingList = (book: Book) => {
    removeBookFromReadingList(book);
    runFiltersUpdate();
  };

  return {
    readingList,
    addBookToReadingList: handleAddBookToReadingList,
    removeBookFromReadingList: handleRemoveBookFromReadingList,
  };
};

export default useReadingList;
