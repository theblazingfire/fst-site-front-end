import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/vue";
import HomePage from "./HomePage.vue";

describe("Homepage Component Test", () => {
  test("Hompage renders some test", () => {
    render(HomePage);
    let h1 = screen.getByTestId("home");
    expect(h1).toBeDefined();
  });
});
