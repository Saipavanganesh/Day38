const prompt = require("prompt-sync")({sigint:true})
const num = Number(prompt("Enter a single digit number"));

let weekday;
switch (num) {
  case 0:
    weekday = "Sunday";
    break;
  case 1:
    weekday = "Monday";
    break;
  case 2:
    weekday = "Tuesday";
    break;
  case 3:
    weekday = "Wednesday";
    break;
  case 4:
    weekday = "Thursday";
    break;
  case 5:
    weekday = "Friday";
    break;
  case 6:
    weekday = "Saturday";
    break;
  default:
    weekday = "not a weekday number";
}

console.log(weekday);
