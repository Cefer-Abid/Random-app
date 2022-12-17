"use strict";

// Decleration elements
const inputEl = document.querySelector(".input");
const btnInputEL = document.querySelector(".btn-input");
const btnRandomEL = document.querySelector(".btn-random");
const ulNameEL = document.querySelector(".ul-name");
const randomInputEL = document.querySelector(".random-input");
const ulDisEL = document.querySelector(".ul-dis");
const btnRestartEL = document.querySelector(".btn-restart");

let data = ["start"];
let randomArr = [];

// Function
const x = function () {
  if (inputEl.value) {
    data.push(inputEl.value);
    const li = document.createElement("li");
    li.classList.add("list");
    li.textContent = inputEl.value;
    ulNameEL.appendChild(li);
    inputEl.value = ``;
  }
};

// Input names
btnInputEL.addEventListener("click", x);
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") x();
});

// Random and Display
btnRandomEL.addEventListener("click", function () {
  if (randomInputEL.value) {
    let req = Math.trunc(Math.random() * randomInputEL.value) + 1;

    if (!randomArr.includes(req)) {
      randomArr.push(req);

      const li = document.createElement("li");
      li.classList.add("list");
      li.textContent = data[req];
      ulDisEL.appendChild(li);
    }
  }
});

// Restart
btnRestartEL.addEventListener("click", function () {
  data = ["start"];
  randomArr = [];
  randomInputEL.value = ``;
  ulNameEL.textContent = ``;
  ulDisEL.textContent = ``;
});
