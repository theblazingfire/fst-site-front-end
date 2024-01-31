import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/vue";
import ServicesPage from "./ServicesPage.vue";

describe("test", function () {
  test("test1", function () {
    render(ServicesPage);
    let ServicesPageElement = screen.getByText("A ServicesPage", {
      exact: false,
    });
    expect(ServicesPageElement).toBeDefined();
  });
});
