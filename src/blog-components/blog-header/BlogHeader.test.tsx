import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BlogHeader from "../blog-header/BlogHeader";
import { headerContent } from "../../assets/general-content/header-content";

describe("BlogHeader Tests", () => {
  it("renders the blog title", () => {
    render(<BlogHeader data={headerContent} />);
    expect(screen.getByText("XPDriven Blog")).toBeInTheDocument();
  });

  it("contains a link to the homepage", () => {
    render(<BlogHeader data={headerContent} />);
    expect(
      screen.getByRole("link", { name: /XPDriven Blog/i })
    ).toHaveAttribute("href", "/");
  });

  it("contains a The blog menu", () => {
    render(<BlogHeader data={headerContent} />);
    expect(screen.getByTestId("blog-menu")).toBeInTheDocument();
  });
});
