import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/vue";
import Hamburger from "./Hamburger.vue";

describe("test", function () {
  test("test1", function () {
    render(Hamburger);
    let HamburgerElement = screen.findByRole("ham");
    expect(HamburgerElement).toBeDefined();
  });
});
