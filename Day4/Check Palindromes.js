function CheckPalindrome(str) {
  // code goes here  
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

// method 2
function CheckPalindrome2(str) {
  let left = 0;
  let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}


// keep this function call here
console.log(CheckPalindrome("racecar"));
console.log(CheckPalindrome("hello"));
console.log(CheckPalindrome("madam"));

// keep this function call here
console.log(CheckPalindrome2("world"));
console.log(CheckPalindrome2("level"));
console.log(CheckPalindrome2("abba"));