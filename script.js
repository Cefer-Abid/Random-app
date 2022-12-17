"use strict";
// tesadufi bir secim eden bir proqram yaz
// bu proqram daxil olan butun  adlari qebul edir, onlari siraya duzub ekranda numayis etdirir
// button`a basdiqda ise tesadufi  bir adi gosterir

// butun adlari yazmaq ucun bir input

const inputEl = document.querySelector(".input");
const btnInputEL = document.querySelector(".btn-input");
const btnRandomEL = document.querySelector(".btn-random");
const ulEL = document.querySelector(".ul-list");
const randomInputEL = document.querySelector(".random-input");
const ulDisEL = document.querySelector(".ul-dis");

const data = ["start"];
//function
const x = function () {
  data.push(inputEl.value);
  console.log(...data);
  const li = document.createElement("li");
  li.classList.add("list");
  li.textContent = inputEl.value;
  ulEL.appendChild(li);
  inputEl.value = ``;
};

// bu inputa daxil olan adlari qebul edib saxlayan bir data
// ve ekranda gosteren sistem

btnInputEL.addEventListener("click", x);
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") x();
});

// ve hemin datadan tesadufi bir secim eden bir random
// ve randomdan cixan reqeme uygun adi ekranda goster

btnRandomEL.addEventListener("click", function () {
  const req = Math.trunc(Math.random() * randomInputEL.value) + 1;
  console.log(req);
  console.log(data[req]);
  const li = document.createElement("li");
  li.classList.add("list");
  li.textContent = data[req];
  ulDisEL.appendChild(li);
  inputEl.value = ``;
});

