import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/vue";
import HomePage from "./HomePage.vue";
import gsap from "../../utils/plugin/vue-gsap";
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})
describe("Homepage Component Test", () => {
  test("Hompage render correctly", () => {
    render(HomePage,{
      global : {
        plugins : [gsap]
      }
    });
    let homeContainer = screen.getByTestId("home");
    expect(homeContainer).toBeDefined();
  });
});
