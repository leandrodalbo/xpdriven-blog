import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import ArticlePage from "../article-page/ArticlePage";
import * as reactRouterDom from "react-router-dom";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof reactRouterDom>(
    "react-router-dom"
  );
  return {
    ...actual,
    useParams: vi.fn(),
  };
});

const renderWithRouter = () =>
  render(
    <BrowserRouter>
      <ArticlePage />
    </BrowserRouter>
  );

describe("ArticlePage Tests", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders the correct article based on a valid ID", () => {
    (reactRouterDom.useParams as vi.Mock).mockReturnValue({ id: "1" });

    renderWithRouter();

    expect(
      screen.getByText("What is Test-Driven Development?")
    ).toBeInTheDocument();
  });

  it("renders Intro on non number article id", () => {
    (reactRouterDom.useParams as vi.Mock).mockReturnValue({ id: "abc" });

    renderWithRouter();

    expect(screen.getByText("Coding Monkeys")).toBeInTheDocument();
  });

  it("renders Intro on invalid article id", () => {
    (reactRouterDom.useParams as vi.Mock).mockReturnValue({ id: "3535" });

    renderWithRouter();

    expect(screen.getByText("Coding Monkeys")).toBeInTheDocument();
  });
});
