import { analyzeArray } from "./analyzeArray.js"

test("to analyze an array and return a set of values", () => {
    expect(analyzeArray([1,2,3])).toEqual({ average: 3, min: 1, max: 3, length: 3 });
})

test("to analyze an array and return a SORTED set of values", () => {
    expect(analyzeArray([3,1,2])).toEqual({ average: 3, min: 1, max: 3, length: 3 });
})

test("to analyze an array and return the min value", () => {
    expect(analyzeArray([4,2,6,7])).toEqual({ average: 9.5, min: 2, max: 7, length: 4 })
})

test("to analyze an array and return an object of values", () => {
    expect(analyzeArray([5,2,1,7,4])).toEqual({ average: 9.5, min: 1, max: 7, length: 5 })
})