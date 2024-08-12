import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Navbar from "./Navbar";

const setFilterSection = vi.fn();

vi.mock("~/hooks/useFilters", () => ({
  __esModule: true,
  default: () => ({
    setFilterSection: setFilterSection,
  }),
}));

describe("Navbar", () => {
  it("should render", () => {
    render(<Navbar />);

    expect(screen.getByText("Virtual Library")).toBeInTheDocument();
    expect(
      screen.getByText("My reading list", { selector: "button" })
    ).toBeInTheDocument();
  });

  it("should call setFilterSection when the button is clicked", () => {
    render(<Navbar />);

    screen.getByText("My reading list").click();

    expect(setFilterSection).toHaveBeenCalledTimes(1);
    expect(setFilterSection).toHaveBeenCalledWith("saved");
  });
});
