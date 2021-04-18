// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = ``;
let todayDate;
let toDay;
let toHours;
let toMinutes;
let toSeconds;
let suffix = "";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

function dayTime() {
  todayDate = new Date();
  toDay = todayDate.getDay();
  toHours = todayDate.getHours();
  toMinutes = todayDate.getMinutes();
  toSeconds = todayDate.getSeconds();
  toHours > 12 ? (suffix = "pm") : (suffix = "am");
  return toDay, toHours, toMinutes, toSeconds, suffix;
}

function displayToday() {
  const todayDiv = document.querySelector(".today");
  const html = `<h1>${days[toDay]}</h1>
  <h3>${toHours}:${toMinutes}:${toSeconds} ${suffix}</h3>`;
  todayDiv.innerHTML = html;
}

setInterval(() => {
  displayToday(dayTime());
}, 1000);
