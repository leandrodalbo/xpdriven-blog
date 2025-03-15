import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BlogFooter from "../blog-footer/BlogFooter";

import { footerContent } from "../../assets/general-content/footer-content";

describe("BlogFooter Test", () => {
  it("renders the footer with correct text", () => {
    render(<BlogFooter data={footerContent} />);
    expect(screen.getByText(/XPDriven Blog/i)).toBeInTheDocument();
  });

  it("displays the correct year dynamically", () => {
    render(<BlogFooter data={footerContent} />);

    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(currentYear.toString(), "i"))
    ).toBeInTheDocument();
  });
});
