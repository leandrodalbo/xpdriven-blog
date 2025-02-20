import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { App } from "./App";

describe("App Tests", () => {

    it("renders all sections", () => {
        render(<App />);

        expect(screen.getByText("XPDriven Blog")).toBeInTheDocument();
        expect(screen.getByText(/© \d{4} XPDriven Blog/i)).toBeInTheDocument();
        expect(screen.getByRole("main")).toBeInTheDocument();
    });

});
