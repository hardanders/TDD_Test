import { capitalize } from "./capitalize.js";

test('to capitalize all letters in a string', () => {
    expect(capitalize('bacon')).toBe('BACON');
});