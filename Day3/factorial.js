function CalculateFactorial(n) {
    if (n < 0) {
        return "Undefined for negative numbers";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
  
}
console.log(CalculateFactorial(5)); // Output: 120
console.log(CalculateFactorial(0)); // Output: 1
console.log(CalculateFactorial(7)); // Output: 5040
console.log(CalculateFactorial(-3)); // Output: Undefined for negative numbers