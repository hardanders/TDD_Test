import { calculator } from "./calculator.js";

test("to take two numbers and add them", () => {
    expect(calculator.add(4,9)).toEqual(13);
});

test("to take two numbers and subtract the first from the second", () => {
    expect(calculator.subtract(39,16)).toEqual(23);
});

test("to take two numbers and multiply them", () => {
    expect(calculator.multiply(12,4)).toEqual(48);
});

test("to take two numbers and divide the first by the second", () => {
    expect(calculator.divide(48,4)).toEqual(12);
});