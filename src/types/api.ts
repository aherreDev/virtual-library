import { Book } from "./book";

export interface ApiResponse {
  library: LibraryItem[];
}

export interface LibraryItem {
  book: Book;
}
