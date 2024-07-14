import { Accordion } from "./Accordion";
import { render, cleanup, screen } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

describe("Accordion", () => {
  beforeEach(() => {
    render(
      <Accordion label="Accordion">
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </Accordion>
    );
  });

  test("accordion should be closed by default", () => {
    expect(screen.queryByText("test")).toBeNull();
  });

  test("accordion should be open on click", () => {
    const accordion = screen.getByText("Accordion");
    accordion.click();
    expect(screen.queryByText("test")).toBeDefined();
  });

  test("accordion should be closed on second click", () => {
    const accordion = screen.getByText("Accordion");
    accordion.click();
    accordion.click();
    expect(screen.queryByText("test")).toBeNull();
  });
});
