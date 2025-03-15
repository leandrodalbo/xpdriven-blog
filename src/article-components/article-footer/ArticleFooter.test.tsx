import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { ArticleFooter } from "./ArticleFooter";

import { agileManifestoContent } from "../../assets/articles-content/AgileManifesto";
import { codeReadabilityMatters } from "../../assets/articles-content/CodeReadabilityMatters";
import { whatiscleancode } from "../../assets/articles-content/WhatIsCleanCode";

describe("Article Footer Test", () => {
  it("renders a simple article footer with header and text", () => {
    render(<ArticleFooter data={agileManifestoContent.footerData} />);
    expect(
      screen.getByText(agileManifestoContent.footerData.h4)
    ).toBeInTheDocument();

    expect(screen.getByTestId("main-text")).toBeInTheDocument();
  });

  it("renders an article footer with a list of links", () => {
    render(<ArticleFooter data={codeReadabilityMatters.footerData} />);
    expect(
      screen.getByText(codeReadabilityMatters.footerData.h4)
    ).toBeInTheDocument();

    expect(screen.getByTestId("section-ul")).toBeInTheDocument();
  });

  it("renders an article footer with a single link", () => {
    render(<ArticleFooter data={whatiscleancode.footerData} />);
    expect(screen.getByText(whatiscleancode.footerData.h4)).toBeInTheDocument();

    expect(screen.getByTestId("link-resource")).toBeInTheDocument();
  });
});
