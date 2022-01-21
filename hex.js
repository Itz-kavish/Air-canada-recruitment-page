const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById("themeBtn");
const toggle = document.getElementsByClassName("fa-toggle-on")[0];
const toggleDiv = document.querySelectorAll("toggleMode");
const color = document.getElementsByClassName("color")[0];
const root = document.querySelector(":root");
const toggleOff = document.getElementsByClassName("fa-toggle-off")[0];

toggle.addEventListener("click", function () {
  root.style.setProperty("--grey", "#2D4263");
  root.style.setProperty("--black", "#ECDBBA");
  root.style.setProperty("--blue", "#191919");
  root.style.setProperty("--light-red", "#ECDBBA");
  root.style.setProperty("--red", "#2D4263");
  root.style.setProperty("--off-white", "#C84B31");
  root.style.setProperty("--teal", "#C84B31");
  toggle.style.display = "none";
  toggleOff.style.display = "block";
});

toggleOff.addEventListener("click", function () {
  root.style.setProperty("--grey", "#c4c4c4");
  root.style.setProperty("--black", "black");
  root.style.setProperty("--blue", "#e1fffa");
  root.style.setProperty("--light-red", "#e5625e");
  root.style.setProperty("--red", "#d82f2e");
  root.style.setProperty("--off-white", "#f5dddd");
  root.style.setProperty("--teal", "#1d9c85");
  toggle.style.display = "block";
  toggleOff.style.display = "none";
});

function generateRandomNum() {
  return Math.floor(Math.random() * hex.length);
}

button.addEventListener("click", function () {
  let hexColor = "#";
  let hexColor1 = "#";
  for (i = 0; i < 6; i++) {
    hexColor += hex[generateRandomNum()];
  }
  console.log(hexColor);
  document.body.style.backgroundColor = hexColor;
});
