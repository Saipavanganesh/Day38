const prompt = require("prompt-sync")({sigint:true})

// Prompt the user for three numbers
const a = Number(prompt("Enter the first number: "));
const b = Number(prompt("Enter the second number: "));
const c = Number(prompt("Enter the third number: "));

const result1 = a + b * c;
const result2 = a % b + c;
const result3 = c + a / b;
const result4 = a * b + c;
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)


let maxResult = result1;
if (result2 > maxResult) {
  maxResult = result2;
}
if (result3 > maxResult) {
  maxResult = result3;
}
if (result4 > maxResult) {
  maxResult = result4;
}

let minResult = result1;
if (result2 < minResult) {
  minResult = result2;
}
if (result3 < minResult) {
  minResult = result3;
}
if (result4 < minResult) {
  minResult = result4;
}

console.log("Maximum result:", maxResult);
console.log("Minimum result:", minResult);
