import { ApiResponse, Book, LibraryItem } from "~/types";

export const apiLibraryItemsToBooks = (libraryItems: LibraryItem[]) => {
  return libraryItems.map((libraryItem) => libraryItem.book);
};

export const booksToApiLibraryItems = (books: Book[]) => {
  return books.map((book) => ({ book }));
};

export const fetchBooks = async () => {
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
