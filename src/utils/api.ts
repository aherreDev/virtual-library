import { Book, LibraryItem } from "~/types";

export const apiLibraryItemsToBooks = (libraryItems: LibraryItem[]) => {
  return libraryItems.map((libraryItem) => libraryItem.book);
};

export const booksToApiLibraryItems = (books: Book[]) => {
  return books.map((book) => ({ book }));
};
