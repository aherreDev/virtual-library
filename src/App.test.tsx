import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import App from "./App";

// Mocking dependencies
vi.mock("~/components/Navbar/Navbar", () => ({
  __esModule: true,
  default: () => <div data-testid="navbar">Navbar</div>,
}));
vi.mock("~/components/PageSections/PageSections", () => ({
  __esModule: true,
  default: () => <div data-testid="pagesections">PageSections</div>,
}));
vi.mock("~/components/BooksList/BooksList", () => ({
  __esModule: true,
  default: () => <div data-testid="bookslist">BooksList</div>,
}));

describe("App", () => {
  it("renders the Navbar, PageSections, and BooksList components", async () => {
    render(<App />);

    // Navbar should be rendered immediately
    expect(screen.getByTestId("navbar")).toBeInTheDocument();

    // Hero section content
    expect(
      screen.getByText("Welcome to your virtual library 📚")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "To get started just go trough the available books list and select the ones that you want to to add to your reading list. Happy reading!"
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText("Explore all the unique books")
    ).toBeInTheDocument();

    // PageSections should be rendered immediately
    expect(screen.getByTestId("pagesections")).toBeInTheDocument();

    // Spinner should be rendered while BooksList is loading
    expect(screen.getByTestId("spinner")).toBeInTheDocument();

    // Wait for BooksList to load
    await waitFor(() =>
      expect(screen.getByTestId("bookslist")).toBeInTheDocument()
    );
  });
});
