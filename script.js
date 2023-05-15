import { addNameToList, deleteSpaces } from "./helper.js";

const container = document.querySelector(".container");
const formEl = document.querySelector(".form");
const newPlayer = document.querySelector(".input");
const playersList = document.querySelector(".players--list");
const containerAllNames = document.querySelector(".display--all-names");
const containerInvidualNames = document.querySelector(
  ".display--invidual-names"
);

const state = {
  allName: [],
  // allName: ["cefer", "husi", "zeze", "mehemmed", "elnur"],
  randomAllNames: [],
  randomInvidualNames: [],
};
// state.randomInvidualNames = state.allName.slice();

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!newPlayer.value) return;

  // Include multiplayer with "," or one by one
  const players = newPlayer.value.split(",");

  // Delete spaces from players
  deleteSpaces(players);

  state.allName.push(...players);

  addNameToList(state.allName, playersList);

  state.randomInvidualNames = state.allName.slice();
  newPlayer.value = "";
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
    // Clean all array
    state.allName = [];
    state.randomAllNames = [];
    state.randomInvidualNames = [];

    // Clean window
    window.location.reload();
  }

  // Delete player
  if (e.target.classList.contains("player--list__icon")) {
    const index = +e.target.dataset.index;
    state.allName.splice(index, 1);

    // Display new list
    addNameToList(state.allName, playersList);
  }
});


