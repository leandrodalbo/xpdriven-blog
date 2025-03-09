import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { ArticleSection } from "./ArticleSection";

import { agileManifestoContent } from "../articles-content/AgileManifesto";

describe("Article Sections Test", () => {
  it("renders all agile manifesto first section", () => {
    render(<ArticleSection data={agileManifestoContent.sectionsData[0]} />);

    expect(screen.getByTestId("section-header")).toBeInTheDocument();
    expect(screen.getByTestId("section-text")).toBeInTheDocument();
    expect(screen.getByTestId("section-image")).toBeInTheDocument();
  });

  it("renders all agile manifesto list section", () => {
    render(<ArticleSection data={agileManifestoContent.sectionsData[2]} />);

    expect(screen.getByTestId("section-header")).toBeInTheDocument();
    expect(screen.getByTestId("section-ul")).toBeInTheDocument();
  });

  it("renders all agile manifesto section with link", () => {
    render(<ArticleSection data={agileManifestoContent.sectionsData[3]} />);

    expect(screen.getByTestId("section-header")).toBeInTheDocument();
    expect(screen.getByTestId("section-text")).toBeInTheDocument();
    expect(screen.getByTestId("section-link-resource")).toBeInTheDocument();
  });
});
