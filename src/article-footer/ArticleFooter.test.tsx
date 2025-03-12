import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { ArticleFooter } from "./ArticleFooter";

import { agileManifestoContent } from "../articles-content/AgileManifesto";

describe("Article Footer Test", () => {
  it("renders a simple article footer with header and texttext", () => {
    render(<ArticleFooter data={agileManifestoContent.footerData} />);
    expect(
      screen.getByText(agileManifestoContent.footerData.h4)
    ).toBeInTheDocument();

    expect(screen.getByTestId("main-text")).toBeInTheDocument();
  });
});
