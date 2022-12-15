"use strict";

function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  document.getElementById("clock").textContent = `${hh}:${mm}:${ss}`;
}

setInterval(currentTime, 1000);
