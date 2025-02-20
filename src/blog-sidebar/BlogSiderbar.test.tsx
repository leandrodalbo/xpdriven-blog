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

    it("renders all articles", () => {
        expect(screen.getByText("React Testing Guide")).toBeInTheDocument();
        expect(screen.getByText("Introduction to Vitest")).toBeInTheDocument();
    });

    it("filters articles based on search input", () => {
        const searchInput = screen.getByPlaceholderText("Search articles...");

        fireEvent.change(searchInput, { target: { value: "React" } });

        expect(screen.getByText("React Testing Guide")).toBeInTheDocument();
        expect(screen.queryByText("Introduction to Vitest")).not.toBeInTheDocument();
    });


    it("collapses the sidebar when clicking the left arrow", () => {
        const collapseButton = screen.getByTestId("arrow-left");

        fireEvent.click(collapseButton);

        expect(screen.queryByPlaceholderText("Search articles...")).not.toBeInTheDocument();
    });

    it("expands the sidebar when clicking the right arrow", () => {
        const collapseButton = screen.getByTestId("arrow-left");
        fireEvent.click(collapseButton);

        const expandButton = screen.getByTestId("arrow-right");;
        fireEvent.click(expandButton);

        expect(screen.getByPlaceholderText("Search articles...")).toBeInTheDocument();
    });
});
