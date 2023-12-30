import { expect, test } from "vitest";
import { createRange } from "../utils/range";

test("Range from 2 to 10 should be [2,3,4,5,6,7,8,9,10]", () => {
  let result = createRange(2, 10);
  expect(result).toStrictEqual([2, 3, 4, 5, 6, 7, 8, 9, 10]);
}); 
