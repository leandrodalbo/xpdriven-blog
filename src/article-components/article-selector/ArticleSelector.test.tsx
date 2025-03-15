import { render, screen } from "@testing-library/react";
import articleSelector from "../article-selector/ArticleSelector";
import { describe, expect, it } from "vitest";

describe("Article Selector Tests", () => {
  it("returns the selected article", () => {
    const Monkeys = articleSelector[0];
    render(<Monkeys />);
    expect(screen.getByText("Coding Monkeys")).toBeInTheDocument();
  });

  it("returns undefined for an invalid key", () => {
    expect(articleSelector[999]).toBeUndefined();
    expect(articleSelector[-1]).toBeUndefined();
    expect(articleSelector["invalid" as unknown as number]).toBeUndefined();
  });
});
