// import {describe, test, expect} from "vitest"
import { TypeLabel } from "./TypeLabel.tsx";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

const onClick = vi.fn();

describe("TypeLabel", () => {
  beforeEach(() => {
    render(<TypeLabel type="fire" onClick={() => onClick()} />);
  });

  test("type should be defined", () => {
    expect(screen.getByText("fire")).toBeDefined();
  });

  test("onClick should be called", () => {
    fireEvent.click(screen.getByText("fire"));
    expect(onClick).toHaveBeenCalled();
  });

  test("invalid type should throw error", () => {
    expect(() => {
      // @ts-ignore
      render(<TypeLabel type="invalid" />);
    }).toThrowError("Invalid type");
  });
});
