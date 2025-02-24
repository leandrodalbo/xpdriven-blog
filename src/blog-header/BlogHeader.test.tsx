import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BlogHeader from "../blog-header/BlogHeader";

describe("BlogHeader Tests", () => {
  it("renders the blog title", () => {
    render(<BlogHeader />);
    expect(screen.getByText("XPDriven Blog")).toBeInTheDocument();
  });

  it("contains a link to the homepage", () => {
    render(<BlogHeader />);
    expect(
      screen.getByRole("link", { name: /XPDriven Blog/i })
    ).toHaveAttribute("href", "/");
  });

  it("renders the links to Linkedin and Github", () => {
    render(<BlogHeader />);

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
        (link) =>
          link.getAttribute("href") ===
          "https://www.linkedin.com/in/leandrodlb/"
      )
    ).toBe(true);
  });
});
