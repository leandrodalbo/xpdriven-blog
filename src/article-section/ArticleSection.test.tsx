import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { ArticleSection } from "./ArticleSection";

import { agileManifestoContent } from "../articles-content/AgileManifesto";
import { whatiscleancode } from "../articles-content/WhatIsCleanCode";

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

  it("renders agile manifesto section with link", () => {
    render(<ArticleSection data={agileManifestoContent.sectionsData[3]} />);

    expect(screen.getByTestId("section-header")).toBeInTheDocument();
    expect(screen.getByTestId("section-text")).toBeInTheDocument();
    expect(screen.getByTestId("section-link-resource")).toBeInTheDocument();
  });

  it("renders an article section with pre code", () => {
    render(<ArticleSection data={whatiscleancode.sectionsData[2]} />);

    expect(screen.getByTestId("section-pre-red")).toBeInTheDocument();
    expect(screen.getByTestId("section-pre-green")).toBeInTheDocument();
  });
});
