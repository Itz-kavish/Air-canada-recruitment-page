//setting all the variables to get element from the html file
let counterJS = 0;
const decrease = document.getElementsByClassName("increase")[0];
const reset = document.getElementsByClassName("reset")[0];
const increase = document.getElementsByClassName("decrease")[0];
const counter = document.getElementsByClassName("number")[0];
const btns = document.querySelectorAll(".counterButtons");

decrease.onclick = function () {
  counter.innerHTML--;
  counterJS--;
  if (counterJS < 0) {
    counter.style.color = "red";
  }
  if (counterJS == 0) {
    counter.style.color = "black";
  }
};
reset.onclick = function () {
  counter.innerHTML = 0;
  counterJS = 0;
  if (counterJS == 0) {
    counter.style.color = "black";
  }
};
increase.onclick = function () {
  counter.innerHTML++;
  counterJS++;
  if (counterJS > 0) {
    counter.style.color = "green";
  }
  if (counterJS == 0) {
    counter.style.color = "black";
  }
};
