let num1 = Math.floor(Math.random()*899) + 100;
console.log(num1)
let num2 = Math.floor(Math.random()*899) + 100;
console.log(num2)
let num3 = Math.floor(Math.random()*899) + 100;
console.log(num3)
let num4 = Math.floor(Math.random()*899) + 100;
console.log(num4)
let num5 = Math.floor(Math.random()*899) + 100;
console.log(num5)
let max = num1;
if (num2 > max) {
  max = num2;
}
if (num3 > max) {
  max = num3;
}
if (num4 > max) {
  max = num4;
}
if (num5 > max) {
  max = num5;
}
let min = num1;
if (num2 < min) {
  min = num2;
}
if (num3 < min) {
  min = num3;
}
if (num4 < min) {
  min = num4;
}
if (num5 < min) {
  min = num5;
}
console.log("Maximum number is: " + max);
console.log("Minimum number is: " + min);