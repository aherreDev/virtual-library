import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("should render", () => {
    render(<Navbar />);

    expect(document.querySelector("header")).not.toBeNull();
  });
});
