import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { ArticleSection } from "./ArticleSection";

import { agileManifestoContent } from "../../assets/articles-content/AgileManifesto";
import { whatiscleancode } from "../../assets/articles-content/WhatIsCleanCode";

import { sfparadigms } from "../../assets/articles-content/SFParadigms";

describe("Article Sections Test", () => {
  it("renders agile manifesto first section", () => {
    render(<ArticleSection data={agileManifestoContent.sectionsData[0]} />);

    expect(screen.getByTestId("section-header")).toBeInTheDocument();
    expect(screen.getByTestId("section-text")).toBeInTheDocument();
    expect(screen.getByTestId("section-image")).toBeInTheDocument();
  });

  it("renders agile manifesto list section", () => {
    render(<ArticleSection data={agileManifestoContent.sectionsData[2]} />);

    expect(screen.getByTestId("section-header")).toBeInTheDocument();
    expect(screen.getByTestId("section-ul")).toBeInTheDocument();
  });

  it("renders an article section with pre code", () => {
    render(<ArticleSection data={whatiscleancode.sectionsData[2]} />);

    expect(screen.getByTestId("section-pre-red")).toBeInTheDocument();
    expect(screen.getByTestId("section-pre-green")).toBeInTheDocument();
  });

  it("renders an article section with an optional footer", () => {
    render(<ArticleSection data={sfparadigms.sectionsData[2]} />);

    expect(screen.getByTestId("section-footer")).toBeInTheDocument();
  });
});
