import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/vue";
import ProductPage from "./ProductPage.vue";

describe("test", function () {
  test("test1", function () {
    render(ProductPage);
    let ProductPageElement = screen.getByText("A ProductPage", {
      exact: false,
    });
    expect(ProductPageElement).toBeDefined();
  });
});
