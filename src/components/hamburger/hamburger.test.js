import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/vue";
import Hamburger from "./Hamburger.vue";

describe("Hamburger Component Test", function () {
  test("Check if the clicking of the hamburger element toggles the open and closing of the menu",async function () {
    // render component here
    await render(Hamburger);
    
    let HamburgerContainer = await screen.findByRole("ham_icon_container")
    expect(HamburgerContainer).toBeDefined()

    let HamburgerElement = await screen.findByRole("ham_icon")
    expect(HamburgerElement).toBeDefined();
    
    // base state, the hamburger element should not be open, test for the class of open, should be falsy
    let ClassActive = HamburgerElement.classList.contains("open")
    expect(ClassActive).toBeFalsy()
    
    await fireEvent.click(HamburgerContainer)
    
    // Test that a click adds the open class to hamburger element
    ClassActive = HamburgerElement.classList.contains("open")
    expect(ClassActive).toBeTruthy()

    // Test that another click removes the open class and returns the component to the base state

    await fireEvent.click(HamburgerContainer)
    
    ClassActive = HamburgerElement.classList.contains("open")
    expect(ClassActive).toBeFalsy()

  });
});
