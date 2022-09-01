let today = new Date();
let currentYear = today.getFullYear();
let nextYear = parseInt(currentYear) + 1;
let newYear = new Date("01/01/" + nextYear.toString());
let timeLeft = newYear - today;
let daysLeft = parseInt(timeLeft / (1000 * 3600 * 24));

document.getElementById("number").innerHTML = daysLeft + "<br/>Days Left";
