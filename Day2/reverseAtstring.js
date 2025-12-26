function reverseAtString(inputString){
    let reversedString = inputString.split('').reverse().join('');
    return reversedString;

}
console.log(reverseAtString("Hello World!")); // Output: !dlroW olleH