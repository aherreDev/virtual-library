import { http, HttpResponse } from "msw";

import { booksToApiLibraryItems } from "~/utils";

import books from "./data/books";

export function getHandlers() {
  const handlers = [
    http.get("/books.json", () => {
      const libraryItems = booksToApiLibraryItems(books);
      return HttpResponse.json({ library: libraryItems });
    }),
  ];

  return handlers;
}
