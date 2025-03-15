import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BlogHeader from "../blog-header/BlogHeader";
import { headerContent } from "../general-content/header-content";

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

  it("renders the links to Linkedin and Github", () => {
    render(<BlogHeader data={headerContent} />);

    const links = screen.getAllByRole("link");

    expect(
      links.some(
        (link) =>
          link.getAttribute("href") === "https://www.youtube.com/@xpdrivenblog"
      )
    ).toBe(true);

    expect(
      links.some(
        (link) =>
          link.getAttribute("href") === "https://github.com/leandrodalbo"
      )
    ).toBe(true);

    expect(
      links.some(
        (link) => link.getAttribute("href") === "https://x.com/xpdrivenblog"
      )
    ).toBe(true);
  });
});
