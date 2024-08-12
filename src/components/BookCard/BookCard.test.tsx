import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import BookCard from "~/components/BookCard/BookCard";
import { Book } from "~/types";

const addBookToReadingList = vi.fn();
const removeBookFromReadingList = vi.fn();

// Mocking dependencies

vi.mock("~/hooks/useReadingList", () => ({
  __esModule: true,
  default: () => ({
    addBookToReadingList,
    removeBookFromReadingList,
  }),
}));

describe("BookCard", () => {
  const mockBook: Book = {
    ISBN: "123",
    title: "Test Book",
    author: { name: "Test Author", otherBooks: [] },
    genre: "Test Genre",
    cover: "test-cover.jpg",
    pages: 100,
    synopsis: "Test Synopsis",
    year: 2021,
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders book details correctly", () => {
    render(
      <BookCard book={mockBook} testId="test-book" isOnReadingList={false} />
    );

    expect(screen.getByTestId("test-book-cardItemTitle")).toHaveTextContent(
      "Test Book"
    );
    expect(screen.getByTestId("test-book-cardItemAuthor")).toHaveTextContent(
      "Test Author"
    );
    expect(screen.getByTestId("test-book-cardItemGenre")).toHaveTextContent(
      "Test Genre"
    );
    expect(screen.getByTestId("test-book-cardItemImg")).toHaveStyle({
      backgroundImage: "url(test-cover.jpg)",
    });
  });

  it("calls addBookToReadingList when the button is clicked", () => {
    render(
      <BookCard book={mockBook} testId="test-book" isOnReadingList={false} />
    );

    fireEvent.click(screen.getByText("Add to reading list"));
    expect(addBookToReadingList).toHaveBeenCalledWith(mockBook);
  });

  it("calls removeBookFromReadingList when the button is clicked", () => {
    render(
      <BookCard book={mockBook} testId="test-book" isOnReadingList={true} />
    );

    fireEvent.click(screen.getByText("Remove from reading list"));
    expect(removeBookFromReadingList).toHaveBeenCalledWith(mockBook);
  });

  it("renders correct button text based on reading list status", () => {
    const { rerender } = render(
      <BookCard book={mockBook} testId="test-book" isOnReadingList={false} />
    );
    expect(screen.getByText("Add to reading list")).toBeInTheDocument();

    rerender(
      <BookCard book={mockBook} testId="test-book" isOnReadingList={true} />
    );
    expect(screen.getByText("Remove from reading list")).toBeInTheDocument();
  });
});
