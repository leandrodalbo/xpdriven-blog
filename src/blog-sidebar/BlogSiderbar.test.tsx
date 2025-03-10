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

  it("expands the sidebar when clicking the right arrow", () => {
    const sidebarArrow = screen.getByTestId("arrow-right");

    fireEvent.click(sidebarArrow);

    expect(screen.queryByPlaceholderText("search")).toBeInTheDocument();
    expect(screen.getByText("React Testing Guide")).toBeInTheDocument();
    expect(screen.getByText("Introduction to Vitest")).toBeInTheDocument();
  });

  it("filters articles based on search input", () => {
    const sidebarArrow = screen.getByTestId("arrow-right");

    fireEvent.click(sidebarArrow);
    const searchInput = screen.getByPlaceholderText("search");

    fireEvent.change(searchInput, { target: { value: "React" } });

    expect(screen.getByText("React Testing Guide")).toBeInTheDocument();
    expect(
      screen.queryByText("Introduction to Vitest")
    ).not.toBeInTheDocument();
  });

  it("hide the sidebar when clicking the left arrow", async () => {
    const sidebarArrow = screen.getByTestId("arrow-right");
    fireEvent.click(sidebarArrow);

    expect(screen.getByTestId("arrow-left")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("arrow-left"));
    expect(screen.getByTestId("arrow-right")).toBeInTheDocument();
  });
});
