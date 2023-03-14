const minute = document.getElementById("minute");
const seconde = document.getElementById("seconde");
const reset = document.getElementById("reset");
const stop = document.getElementById("stop");
let var_seconde = 10;
let var_minute = 2;
const time_end = false;

minute.innerText = var_minute;
seconde.innerText = var_seconde;

setInterval(secondes, 1000);

reset.addEventListener("click", () => {
  var_seconde = 10;
  var_minute = 2;
  minute.innerText = var_minute;
  seconde.innerText = var_seconde;
});
stop.addEventListener("click", () => {
  var_seconde = 00;
  var_minute = 0;
  minute.innerText = var_minute;
  seconde.innerText = var_seconde + "0";
});

function secondes() {
  if (time_end != true) {
    if (var_seconde == 0) {
      minutes();
      var_seconde = 10;
    } else {
      if (var_seconde <= 10) {
        var_seconde -= 1;
        seconde.innerText = "0" + var_seconde;
      } else {
        var_seconde -= 1;
        seconde.innerText = var_seconde;
      }
    }
  } else {
    var_seconde = 0;
    var_minute = 0;
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
