import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/vue";
import Ref from "./Ref.vue"

describe("test", function () {
    test("test1",function () {
        render(Ref)
        let RefElement = screen.getByText("A Ref",{exact : false})
        expect(RefElement).toBeDefined()
    })
})


