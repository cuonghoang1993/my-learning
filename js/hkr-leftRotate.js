// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen
/*
Sample Input
5 4
1 2 3 4 5
Sample Output
5 1 2 3 4
Explanation
When we perform  left rotations, the array undergoes the following sequence of changes:
[ 1, 2, 3, 4, 5 ] -> [ 2, 3, 4, 5, 1 ] -> [ 3, 4, 5, 1, 2 ] -> [ 4, 5, 1, 2, 3 ] -> [ 5, 1, 2, 3, 4 ]
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

process.stdin.on("end", function () {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the rotLeft function below.
function rotLeft(a, d) {
  for (let i = 0; i < d; i++) {
    a.push(a.shift());
  }
  return a;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nd = readLine().split(" ");

  const n = parseInt(nd[0], 10);

  const d = parseInt(nd[1], 10);

  const a = readLine()
    .split(" ")
    .map((aTemp) => parseInt(aTemp, 10));

  const result = rotLeft(a, d);

  ws.write(result.join(" ") + "\n");

  ws.end();
}
