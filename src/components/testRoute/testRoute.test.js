import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/vue";
import TestRoute from "./TestRoute.vue";

describe("test", function () {
  test("test1", function () {
    render(TestRoute);
    let TestRouteElement = screen.getByText("A TestRoute", { exact: false });
    expect(TestRouteElement).toBeDefined();
  });
});
