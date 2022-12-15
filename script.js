"use strict";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  ss < 10 ? (ss = `0${ss}`) : ss;
  mm < 10 ? (mm = `0${mm}`) : mm;
  hh < 10 ? (hh = `0${hh}`) : hh;

  document.getElementById("clock").textContent = `${hh}:${mm}:${ss} hours`;
}

function currentDate() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  let realMonth = months[month];
  let realDay = day;

  switch (day % 10) {
    case 1:
      realDay = `${day}st`;
      break;
    case 2:
      realDay = `${day}nd`;
      break;
    case 3:
      realDay = `${day}rd`;
      break;
    default:
      realDay = `${day}th`;
      break;
  }

  document.getElementById(
    "date"
  ).textContent = `${realDay} ${realMonth}, ${year}`;
}

setInterval(currentTime, 1000);
setInterval(currentDate, 1000);
