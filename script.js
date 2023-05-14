import { addNameToList } from "./helper.js";

const container = document.querySelector(".container");
const formEl = document.querySelector(".form");
const newName = document.querySelector(".input");
const playersList = document.querySelector(".players--list");
const containerAllNames = document.querySelector(".display--all-names");
const containerInvidualNames = document.querySelector(
  ".display--invidual-names"
);

const state = {
  // allName: [],
  allName: ["cefer", "husi", "zeze", "mehemmed", "elnur"],
  randomAllNames: [],
  randomInvidualNames: [],
};
state.randomInvidualNames = state.allName.slice();

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  state.allName.push(newName.value);
  addNameToList(state.allName, playersList);

  state.randomInvidualNames = state.allName.slice();
  newName.value = "";
});

container.addEventListener("click", function (e) {
  //    Random All
  if (e.target.classList.contains("btn-random--all")) {
    state.randomAllNames = state.allName.slice();
    const arr = [];

    state.allName.forEach(() => {
      const index = Math.floor(Math.random() * state.randomAllNames.length);
      arr.push(state.randomAllNames[index]);
      state.randomAllNames.splice(index, 1);
    });

    addNameToList(arr, containerAllNames);
  }

  //    Random Invidual
  if (e.target.classList.contains("btn-random--invidual")) {
    if (!state.randomInvidualNames.length) return;

    const index = Math.floor(Math.random() * state.randomInvidualNames.length);
    const string = `
      <li class="list random--list random--list__player individual--random--list">${state.randomInvidualNames[index]}</li>
      `;
    state.randomInvidualNames.splice(index, 1);
    containerInvidualNames.insertAdjacentHTML("beforeend", string);
  }

  //    Restart
  if (e.target.classList.contains("btn-restart")) {
    // Clean all arrays
    state.allName = [];
    state.randomAllNames = [];
    state.randomInvidualNames = [];

    // Clean all li elements
    const nodeList = document.querySelectorAll(".list");
    Array.from(nodeList).map((el) => el.remove());
  }
});
