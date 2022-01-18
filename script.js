let today = new Date();
let new_year = new Date("01/01/2023");
let time_left = new_year - today;
let days_left = parseInt(time_left / (1000 * 3600 * 24));

document.getElementById("number").innerHTML = days_left + "<br/>Days Left";