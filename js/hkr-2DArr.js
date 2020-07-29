// https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
/*
Sample Input
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0
Sample Output
19
Explanation
 contains the following hourglasses:
image
The hourglass with the maximum sum () is:
2 4 4
  2
1 2 4
*/

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the hourglassSum function below.
function hourglassSum(arr) {
  let sum = Math.max();
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let temp =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2] +
        arr[i + 1][j + 1];
      if (temp > sum) {
        sum = temp;
      }
    }
  }
  return sum;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  let arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine()
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  let result = hourglassSum(arr);

  ws.write(result + "\n");

  ws.end();
}
