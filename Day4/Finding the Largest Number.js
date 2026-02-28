function FindTheLargestNum(arr) {
  // code goes here  
  return Math.max(...arr);
}

// 2nd method
function FindTheLargestNum2(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// keep this function call here
console.log(FindTheLargestNum([4, 5, 1, 3]));
console.log(FindTheLargestNum([300, 200, 600, 150]));
console.log(FindTheLargestNum2([46, 15, 61, 23]));
console.log(FindTheLargestNum2([300, 2000, 600, 150]));