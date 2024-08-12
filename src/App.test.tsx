import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { describe, expect, it } from "vitest";

import App from "./App";

describe("App", () => {
  it("should render a loading message", async () => {
    render(<App />);
    expect(screen.getByTestId("books-loading")).toBeInTheDocument();
  });

  it("should render a list of books", async () => {
    render(<App />);

    // Wait for the loading message to disappear
    await waitForElementToBeRemoved(() => screen.getByTestId("books-loading"));

    expect(screen.getByTestId("books-list")).toBeInTheDocument();
  });
});
