import { sum } from '../sum'; // Import the sum function from the sum.js file

test("Sum should cal the sum of two numbers", () => {
    const result = sum(3, 4);
    expect(result).toBe(7);
});

test("Sum should handle negative numbers", () => {
    const result = sum(-2, -5);
    expect(result).toBe(-7);
});

test("Sum should handle zero", () => {
    const result = sum(0, 5);
    expect(result).toBe(5);
});

test("Sum should handle decimal numbers", () => {
    const result = sum(2.5, 3.1);
    expect(result).toBeCloseTo(5.6);
});

// We recommend installing an extension to run jest tests.