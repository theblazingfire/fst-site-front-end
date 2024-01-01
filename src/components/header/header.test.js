import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/vue";
import Header from "./Header.vue"

describe("test", function () {
    test("test1",function () {
        render(Header)
        let header = screen.getByText("",{exact : false})
        expect(header).toBeDefined()
    })
})