const minute = document.getElementById("minute");
const seconde = document.getElementById("seconde");
const reset = document.getElementById("reset");
const stop = document.getElementById("stop");
const color_time = document.getElementById("color_time");
const select = document.getElementById("select");

let time_color = 100;
let calcul_time = 100 / (select.value * 60);
let var_seconde = 59;
let var_minute = select.value - 1;
let time_end = false;
let time_interval = 1000;

minute.innerText = var_minute;
seconde.innerText = var_seconde;

setInterval(secondes, time_interval);

reset.addEventListener("click", () => {
  var_seconde = 59;
  var_minute = select.value - 1;
  console.log(select);
  minute.innerText = var_minute;
  seconde.innerText = var_seconde;
  time_end = false;
  time_color = 100;
  color_time.style.width = time_color + "%";
});
stop.addEventListener("click", () => {
  var_seconde = 00;
  var_minute = 0;
  minute.innerText = var_minute;
  seconde.innerText = var_seconde + "0";
  time_color = 0;
  color_time.style.width = time_color + "%";
});

function secondes() {
  if (time_end != true) {
    if (var_seconde == 0) {
      var_seconde = 59;
      minutes();
    } else {
      if (var_seconde <= 10) {
        var_seconde -= 1;
        seconde.innerText = "0" + var_seconde;
        time_color -= calcul_time;
        color_time.style.width = time_color + "%";
      } else {
        var_seconde -= 1;
        seconde.innerText = var_seconde;
        time_color -= calcul_time;
        color_time.style.width = time_color + "%";
      }
    }
  } else {
    var_seconde = 0;
    var_minute = 0;
    time_color = 0;
    color_time.style.width = time_color + "%";
  }
}

function minutes() {
  if (var_minute == 0) {
    time_end = true;
  } else {
    var_minute -= 1;
    minute.innerText = var_minute;
  }
}
