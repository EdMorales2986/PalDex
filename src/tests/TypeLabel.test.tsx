// import {describe, test, expect} from "vitest"
import { TypeLabel } from "../components/atoms/TypeLabel.tsx";
import { render, screen, fireEvent } from "@testing-library/react";

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
});
