// import {describe, test, expect} from "vitest"
import { DynaWrapper } from "./DynaWrapper.tsx";
import { render, cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

// const onClick = vi.fn();

describe("DynaWrapper", () => {
  beforeEach(() => {
    render(
      <DynaWrapper>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </DynaWrapper>
    );
  });

  test("orientation should be horizontal", () => {
    expect(document.querySelector(".dyna-wrapper--horizontal")).toBeDefined();
  });

  test("orientation should be vertical", () => {
    expect(document.querySelector(".dyna-wrapper--vertical")).toBeDefined();
  });

  test("invalid orientation should throw error", () => {
    expect(() => {
      // @ts-ignore
      render(<DynaWrapper orientation="invalid" />);
    }).toThrowError("Invalid orientation");
  });

  test("no children should throw error", () => {
    expect(() => {
      // @ts-ignore
      render(<DynaWrapper />);
    }).toThrowError("DynaWrapper must have at least one child");
  });
});
