import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/vue";
import BlogPage from "./BlogPage.vue";

describe("test", function () {
  test("test1", function () {
    render(BlogPage);
    let BlogPageElement = screen.getByText("A BlogPage", { exact: false });
    expect(BlogPageElement).toBeDefined();
  });
});
