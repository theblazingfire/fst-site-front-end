import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/vue";
import ExhibitPage from "./ExhibitPage.vue";

describe("test", function () {
  test("test1", function () {
    render(ExhibitPage);
    let ExhibitPageElement = screen.getByText("A ExhibitPage", {
      exact: false,
    });
    expect(ExhibitPageElement).toBeDefined();
  });
});
