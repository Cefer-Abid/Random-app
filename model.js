import { deleteSpaces } from "./helper.js";

export const state = {
  // allPlayer: [],
  allPlayer: ["cefer", "husi", "zeze", "mehemmed", "elnur"],
  randomAllPlayers: [],
  randomInvidualPlayers: [],
  invidualPlayer: "",
};

export const addNewPlayer = function (newPlayer) {
  // Include multiplayer with "," or one by one
  const players = newPlayer.split(",");

  // Delete spaces from players
  deleteSpaces(players);

  state.allPlayer.push(...players);
  state.randomInvidualPlayers = state.allPlayer.slice();
};

export const makeGeneralRandom = function () {
  state.randomAllPlayers = [];
  const arr = state.allPlayer.slice();

  state.allPlayer.forEach(() => {
    const index = Math.floor(Math.random() * arr.length);
    state.randomAllPlayers.push(arr[index]);
    arr.splice(index, 1);
  });
};

export const makeInvidualRandom = function () {
  if (!state.randomInvidualPlayers.length) return (state.invidualPlayer = "");

  const index = Math.floor(Math.random() * state.randomInvidualPlayers.length);

  state.invidualPlayer = state.randomInvidualPlayers[index];
  state.randomInvidualPlayers.splice(index, 1);
};

export const restart = function () {
  state.allPlayer = [];
  state.randomAllPlayers = [];
  state.randomInvidualPlayers = [];
  state.invidualPlayer = "";
};

export const deletePlayer = function (deletedIndex) {
  state.allPlayer.splice(deletedIndex, 1);
};

export const restartInvidualList = function () {
  state.randomInvidualPlayers = state.allPlayer.slice();
  
};
