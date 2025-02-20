import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BlogFooter from "../blog-footer/BlogFooter";

describe("BlogFooter Test", () => {

    it("renders the footer with correct text", () => {
        render(<BlogFooter />);
        expect(screen.getByText(/XPDriven Blog/i)).toBeInTheDocument();

    });

    it("displays the correct year dynamically", () => {
        render(<BlogFooter />);

        const currentYear = new Date().getFullYear();
        expect(screen.getByText(new RegExp(currentYear.toString(), "i"))).toBeInTheDocument();
    });

});
