import { create } from "zustand";
import { persist } from "zustand/middleware";

import createBooksSlice, { BooksSlice } from "./booksSlice";
import createFiltersSlice, { FiltersSlice } from "./filtersSlice";
import createReadingListSlice, { ReadingListSlice } from "./readingListSlice";

const useBoundStore = create<BooksSlice & ReadingListSlice & FiltersSlice>()(
  persist(
    (...a) => ({
      ...createBooksSlice(...a),
      ...createReadingListSlice(...a),
      ...createFiltersSlice(...a),
    }),
    { name: "books-store" }
  )
);

export default useBoundStore;
