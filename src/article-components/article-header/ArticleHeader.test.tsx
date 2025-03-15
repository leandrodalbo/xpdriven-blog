import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { ArticleHeader } from "./ArticleHeader";

import { codingMonkeysContent } from "../../assets/articles-content/CodingMonkeys";
import { agileManifestoContent } from "../../assets/articles-content/AgileManifesto";
import { whatistdd } from "../../assets/articles-content/WhatIsTDD";

describe("Article Header Test", () => {
  it("renders the header with mandatory content and secondary text", () => {
    render(<ArticleHeader data={agileManifestoContent.headerData} />);
    expect(
      screen.getByText(agileManifestoContent.headerData.h1)
    ).toBeInTheDocument();

    expect(screen.getByTestId("main-text")).toBeInTheDocument();
    expect(screen.getByTestId("second-text")).toBeInTheDocument();
  });

  it("renders the header with optional and mandatory content", () => {
    render(<ArticleHeader data={codingMonkeysContent.headerData} />);

    expect(screen.getByTestId("main-text")).toBeInTheDocument();

    expect(screen.getByTestId("h2-element")).toBeInTheDocument();
    expect(screen.getByTestId("header-image")).toBeInTheDocument();
  });

  it("renders the header with optional link resource", () => {
    render(<ArticleHeader data={whatistdd.headerData} />);

    expect(screen.getByTestId("link-resource")).toBeInTheDocument();
  });
});
