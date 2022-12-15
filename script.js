"use strict";

function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  ss < 10 ? (ss = `0${ss}`) : ss;
  mm < 10 ? (mm = `0${mm}`) : mm;
  hh < 10 ? (hh = `0${hh}`) : hh;
  document.getElementById("clock").textContent = `${hh}:${mm}:${ss}`;
}

setInterval(currentTime, 1000);
