import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/vue";
import Footer from "./Footer.vue";

describe("test", function () {
  test("test1", function () {
    render(Footer);
    let FooterElement = screen.getByText("A Footer", { exact: false });
    expect(FooterElement).toBeDefined();
  });
});
