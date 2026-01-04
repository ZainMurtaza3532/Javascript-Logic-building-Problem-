function calculateSumOfDigits(number) {
    let sum = 0;
    const numStr = number.toString();
    for (let char of numStr) {
        sum += parseInt(char, 10);
    }

    return sum;
}
console.log(calculateSumOfDigits(12345)); // Output: 15
console.log(calculateSumOfDigits(9876));
console.log(calculateSumOfDigits(987654321));