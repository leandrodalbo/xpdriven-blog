import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach } from "vitest";
import BlogSidebar from "../blog-sidebar/BlogSidebar";

const mockArticles = [
  { id: 1, title: "React Testing Guide" },
  { id: 2, title: "Introduction to Vitest" },
];

describe("BlogSidebar Tests", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <BlogSidebar articles={mockArticles} />
      </BrowserRouter>
    );
  });

  it("expands the sidebar when clicking the tdd cycle", () => {
    const tddCycle = screen.getByTestId("tdd-cycle");

    fireEvent.click(tddCycle);

    expect(screen.queryByPlaceholderText("search")).toBeInTheDocument();
    expect(screen.getByText("React Testing Guide")).toBeInTheDocument();
    expect(screen.getByText("Introduction to Vitest")).toBeInTheDocument();
  });

  it("filters articles based on search input", () => {
    const tddCycle = screen.getByTestId("tdd-cycle");

    fireEvent.click(tddCycle);
    const searchInput = screen.getByPlaceholderText("search");

    fireEvent.change(searchInput, { target: { value: "React" } });

    expect(screen.getByText("React Testing Guide")).toBeInTheDocument();
    expect(
      screen.queryByText("Introduction to Vitest")
    ).not.toBeInTheDocument();
  });

  it("hide the sidebar when clicking the tdd cycle", async () => {
    const tddCycle = screen.getByTestId("tdd-cycle");
    fireEvent.click(tddCycle);

    expect(screen.getByTestId("tdd-cycle")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("tdd-cycle"));
    expect(
      screen.queryByText("Introduction to Vitest")
    ).not.toBeInTheDocument();
  });
});
