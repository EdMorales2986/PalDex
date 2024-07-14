import { Loader } from "./Loader.tsx";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

describe("Loader", () => {
  beforeEach(() => {
    render(<Loader />);
  });

  test("loader should be defined", () => {
    expect(screen.getAllByLabelText("loader")).toBeDefined();
  });
});
