import { StateCreator } from "zustand";

import { Book } from "~/types";

export interface BooksSlice {
  books: Book[];
  setBooks: (books: Book[]) => void;
}

const createBooksSlice: StateCreator<BooksSlice, [], [], BooksSlice> = (
  set
) => ({
  books: [],
  setBooks: (books: Book[]) => set({ books }),
});

export default createBooksSlice;
