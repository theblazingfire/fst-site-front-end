import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/vue";
import Header from "./Header.vue";
import store from "../../store/store";
import router from "../../router/router";
import gsap from "../../utils/plugin/vue-gsap";

describe("Header Component Testing", function () {
  test("test that the mobile menu is opened when the hamburger is clicked", async function () {
    await render(Header, {
      global: {
        plugins : [store,router, gsap]
      }
    });
    let header = await screen.findByRole("header");
    expect(header).toBeDefined();
    let HamburgerElement = await screen.findByRole("ham_icon");
    let mobileMenu = screen.getByRole("mobile_menu");

    await fireEvent.click(HamburgerElement);

    expect(mobileMenu.classList.contains("open")).toBe(true);

    await fireEvent.click(HamburgerElement);

    expect(mobileMenu.classList.contains("open")).toBe(false);
  });
});
