import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { BlogArticle } from "./BlogArticle";

import { agileManifestoContent } from "../articles-content/AgileManifesto";

describe("Blog Article Test", () => {
  it("renders a article with header, sections and footer", () => {
    render(<BlogArticle data={agileManifestoContent} />);

    expect(screen.getByTestId("article-header")).toBeInTheDocument();
    expect(screen.getByTestId("article-sections")).toBeInTheDocument();
    expect(screen.getByTestId("article-footer")).toBeInTheDocument();
  });
});
