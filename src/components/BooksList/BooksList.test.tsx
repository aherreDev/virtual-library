import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import BooksList from "./BooksList";

describe("BooksList", () => {
  it("should render", () => {
    render(<BooksList />);

    expect(document.querySelector("h1")).not.toBeNull();
  });
});
