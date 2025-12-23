function SmallestOfThreeNumbers(a, b, c) {
    if (a <= b && a <= c) {
        return a;
    } else if (b <= a && b <= c) {
        return b;
    } else {
        return c;
    }
}

// Example usage:
console.log(SmallestOfThreeNumbers(3, 1, 2)); // Output: 1
console.log(SmallestOfThreeNumbers(-1, -5, -8)); // Output: -5
console.log(SmallestOfThreeNumbers(0, 0, 0)); // Output: 0
