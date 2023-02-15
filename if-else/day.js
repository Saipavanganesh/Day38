const prompt = require("prompt-sync")({sigint:true})
let month = prompt("Enter month: ")
let date = prompt("Enter date: ")
if ((month == 3 && day >= 20) || (month > 3 && month < 6) || (month == 6 && day <= 20)) {
    console.log(true);
  } else {
    console.log(false);
  }