const life1 = document.getElementById("life1");
const life = document.querySelectorAll(".life");
const btn_eat = document.getElementById("btn_eat");
const color_Happiness = document.getElementById("color_Happiness");
const text_creatures = document.getElementById("text_creatures");

let time = 1000;
let happy = 100;
let nbre_life = 0;
console.log(life);

setInterval(happiness, time);

function happiness() {
  if (nbre_life !== 0) {
    text_creatures.innerText = "";
    if (happy !== 0) {
      happy -= 10;
      color_Happiness.style.width = happy + "%";
      if (happy == 0) {
        nbre_life -= 1;
        white_draw();
      }
    } else {
      happy = 100;
    }
  } else {
    text_creatures.innerText = "dead";
    time = 0;
  }
}

function white_draw() {
  life[nbre_life].style.backgroundColor = "white";
}

function life_draw() {
  for (let i = 0; i < nbre_life; i++) {
    life[i].style.backgroundColor = "white";
    life[i].style.backgroundColor = "red";
  }
}

btn_eat.addEventListener("click", () => {
  nbre_life += 1;
  life_draw();
});

/*life.forEach((life) => {
  life.style.backgroundColor = "red";
  console.log(life);
});*/
