import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, Mock, vi } from "vitest";

import BooksListFilters from "~/components/BooksListFilters/BooksListFilters";
import useFilters from "~/hooks/useFilters";

vi.mock("~/hooks/useFilters");
vi.mock("~/store", () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (selector: any) =>
    selector({
      books: [
        { genre: "Fiction", ISBN: "123", title: "Book 1" },
        { genre: "Non-Fiction", ISBN: "456", title: "Book 2" },
        { genre: "Fiction", ISBN: "789", title: "Book 3" },
      ],
    }),
}));

describe("BooksListFilters", () => {
  const mockedFilterGenre = ["Fiction"];
  const mockedSetFilterGenre = vi.fn();

  beforeEach(() => {
    (useFilters as Mock).mockReturnValue({
      filterGenre: mockedFilterGenre,
      setFilterGenre: mockedSetFilterGenre,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders filters with correct count", () => {
    render(<BooksListFilters />);

    expect(screen.getByText("Filters - Total (3)")).toBeInTheDocument();
    expect(screen.getByLabelText("Fiction - (2)")).toBeInTheDocument();
    expect(screen.getByLabelText("Non-Fiction - (1)")).toBeInTheDocument();
  });

  it("checks the correct filters as selected", () => {
    render(<BooksListFilters />);

    expect(
      (screen.getByLabelText("Fiction - (2)") as HTMLInputElement).checked
    ).toBe(true);
    expect(
      (screen.getByLabelText("Non-Fiction - (1)") as HTMLInputElement).checked
    ).toBe(false);
  });

  it("calls setFilterGenre when a filter is changed", () => {
    render(<BooksListFilters />);

    const fictionCheckbox = screen.getByLabelText("Fiction - (2)");
    fireEvent.click(fictionCheckbox);

    expect(mockedSetFilterGenre).toHaveBeenCalledWith([]);
  });

  it("calls setFilterGenre when a new filter is selected", () => {
    render(<BooksListFilters />);

    const nonFictionCheckbox = screen.getByLabelText("Non-Fiction - (1)");
    fireEvent.click(nonFictionCheckbox);

    expect(mockedSetFilterGenre).toHaveBeenCalledWith([
      ...mockedFilterGenre,
      "Non-Fiction",
    ]);
  });
});
