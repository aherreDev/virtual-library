import { render, screen } from "@testing-library/react";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  Mock,
  test,
  vi,
} from "vitest";

import BooksList from "~/components/BooksList/BooksList";
import useBooks from "~/hooks/useBooks";
import useFilters from "~/hooks/useFilters";
import useReadingList from "~/hooks/useReadingList";
import { Book } from "~/types";

// Mocking dependencies
vi.mock("~/hooks/useBooks");
vi.mock("~/hooks/useFilters");
vi.mock("~/hooks/useReadingList");
vi.mock("~/components/BookCard/BookCard", () => ({
  __esModule: true,
  default: ({
    book,
    isOnReadingList,
  }: {
    book: Book;
    isOnReadingList: boolean;
  }) => (
    <div data-testid={`book-${book.ISBN}`}>
      {book.title} -{" "}
      {isOnReadingList ? "On Reading List" : "Not on Reading List"}
    </div>
  ),
}));
vi.mock("~/components/BooksListFilters/BooksListFilters", () => ({
  __esModule: true,
  default: () => <div data-testid="books-list-filters">Filters</div>,
}));

describe("BooksList", () => {
  const mockedBooks = [
    { ISBN: "123", title: "Book 1" },
    { ISBN: "456", title: "Book 2" },
  ];
  const mockedReadingList = [{ ISBN: "123", title: "Book 1" }];

  beforeEach(() => {
    (useBooks as Mock).mockReturnValue({ isLoading: false });
    (useFilters as Mock).mockReturnValue({ filteredBooks: mockedBooks });
    (useReadingList as Mock).mockReturnValue({
      readingList: mockedReadingList,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test("renders loading state", () => {
    (useBooks as Mock).mockReturnValueOnce({ isLoading: true });
    render(<BooksList />);

    expect(screen.getByTestId("books-loading")).toBeInTheDocument();
  });

  test("renders BooksListFilters component", () => {
    render(<BooksList />);

    expect(screen.getByTestId("books-list-filters")).toBeInTheDocument();
  });

  test("renders a list of books", () => {
    render(<BooksList />);

    expect(screen.getByTestId("books-list")).toBeInTheDocument();
    expect(screen.getByTestId("book-123")).toBeInTheDocument();
    expect(screen.getByTestId("book-456")).toBeInTheDocument();
  });

  test("checks if books are on the reading list", () => {
    render(<BooksList />);

    expect(screen.getByTestId("book-123")).toHaveTextContent("On Reading List");
    expect(screen.getByTestId("book-456")).toHaveTextContent(
      "Not on Reading List"
    );
  });
});
