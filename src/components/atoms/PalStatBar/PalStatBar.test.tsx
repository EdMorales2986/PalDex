import { PalStatBar } from "./PalStatBar";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

describe("PalStatBar", () => {
  beforeEach(() => {
    render(<PalStatBar name="hp" value={100} max={200} />);
  });

  test("name should be defined", () => {
    expect(screen.getByText("hp")).toBeDefined();
  });

  test("value should be defined", () => {
    expect(screen.getByText("100")).toBeDefined();
  });

  test("unknown should be default name", () => {
    render(<PalStatBar />);
    expect(screen.getByText("unknown")).toBeDefined();
  });

  test("0 should be default value", () => {
    render(<PalStatBar />);
    expect(screen.getByText("0")).toBeDefined();
  });
});
