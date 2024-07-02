import { PalFrame } from "./PalFrame";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

// const onMouseEnter = vi.fn();
// const onMouseLeave = vi.fn();

describe("PalFrame", () => {
  beforeEach(() => {
    render(
      <PalFrame
        data={{
          name: "bulbasaur",
          sprites: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
          },
        }}
      />
    );
  });

  test("name should be defined", () => {
    expect(screen.getByRole("img")).toBeDefined();
  });

  test("image should be defined", () => {
    expect(screen.getByAltText("bulbasaur")).toBeDefined();
  });

  test("onMouseEnter should be called", () => {
    fireEvent.mouseEnter(screen.getByRole("img"));
  });

  test("onMouseLeave should be called", () => {
    fireEvent.mouseLeave(screen.getByRole("img"));
  });
});
