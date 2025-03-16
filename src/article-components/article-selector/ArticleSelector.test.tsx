import { render, screen } from "@testing-library/react";
import articleSelector from "./ArticleSelector";
import { describe, expect, it } from "vitest";

describe("Article Selector Tests", () => {
  it("returns the selected article", () => {
    render(articleSelector(1));
    expect(screen.getByText("Coding Monkeys")).toBeInTheDocument();
  });
});
