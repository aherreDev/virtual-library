import { StateCreator } from "zustand";

import { Book } from "~/types";

export interface ReadingListSlice {
  readingList: Book[];
  addBookToReadingList: (book: Book) => void;
  removeBookFromReadingList: (book: Book) => void;
}

const createReadingListSlice: StateCreator<
  ReadingListSlice,
  [],
  [],
  ReadingListSlice
> = (set) => ({
  readingList: [],
  addBookToReadingList: (book: Book) =>
    set((state) => ({
      readingList: [...state.readingList, book],
    })),
  removeBookFromReadingList: (book: Book) =>
    set((state) => ({
      readingList: state.readingList.filter((b) => b.ISBN !== book.ISBN),
    })),
});

export default createReadingListSlice;
