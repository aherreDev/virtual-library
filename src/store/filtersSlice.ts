import { StateCreator } from "zustand";

import { Book } from "~/types";

import { BooksSlice } from "./booksSlice";
import { ReadingListSlice } from "./readingListSlice";

type FilterSections = "all" | "available" | "saved";

export interface FiltersSlice {
  filterGenre: string[];
  setFilterGenre: (filterGenre: string[]) => void;

  filterSection: FilterSections;
  setFilterSection: (filterSection: FilterSections) => void;

  filteredBooks: Book[];
  runFiltersUpdate: () => void;
}

const filterBooks = (
  books: Book[],
  filterGenre: string[],
  filterSection: FilterSections,
  savedBooks: Book[]
) => {
  return books.filter((book) => {
    const genreMatch =
      filterGenre.length === 0 || filterGenre.includes(book.genre);
    const isSaved = savedBooks.some(
      (savedBook) => savedBook.ISBN === book.ISBN
    );

    if (filterSection === "all") return genreMatch;
    if (filterSection === "available") return genreMatch && !isSaved;
    if (filterSection === "saved") return genreMatch && isSaved;
  });
};

const createFiltersSlice: StateCreator<
  FiltersSlice & BooksSlice & ReadingListSlice,
  [],
  [],
  FiltersSlice
> = (set, get) => ({
  filterGenre: [],
  setFilterGenre: (filterGenre: string[]) => {
    const books = get().books;
    const savedBooks = get().readingList;
    const filterSection = get().filterSection;
    const filteredBooks = filterBooks(
      books,
      filterGenre,
      filterSection,
      savedBooks
    );

    set({ filterGenre, filteredBooks });
  },

  filterSection: "all",
  setFilterSection: (filterSection: string) => {
    const typedFilterSection = filterSection as FilterSections;

    const books = get().books;
    const savedBooks = get().readingList;
    const filterGenre = get().filterGenre;
    const filteredBooks = filterBooks(
      books,
      filterGenre,
      typedFilterSection,
      savedBooks
    );

    set({ filterSection: typedFilterSection, filteredBooks });
  },
  runFiltersUpdate: () => {
    const books = get().books;
    const savedBooks = get().readingList;
    const filterGenre = get().filterGenre;
    const filterSection = get().filterSection;
    const filteredBooks = filterBooks(
      books,
      filterGenre,
      filterSection,
      savedBooks
    );

    set({ filteredBooks });
  },

  filteredBooks: [],
});

export default createFiltersSlice;
