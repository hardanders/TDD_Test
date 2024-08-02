import { caesarCipher } from "./caesarCipher.js";

test("to take a string and key and return an encrypted Caesar cipher", () => {
    expect(caesarCipher("Bacon Lover", 5)).toMatch("Gfhts Qtajw");
});