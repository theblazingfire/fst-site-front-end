import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/vue";
import HomePage from "./HomePage.vue";

describe("Homepage Component Test", () => {
  test("Hompage renders some test", () => {
    render(HomePage);
    let homeContainer = screen.getByTestId("home");
    expect(homeContainer).toBeDefined();
  });
});
