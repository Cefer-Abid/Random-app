import * as model from "./model.js";
import generalRandomView from "./view/generalRandomView.js";
import invidualRandomView from "./view/invidualRandomView.js";
import playerListView from "./view/playerListView.js";
import containerView from "./view/containerView.js";

const controlPlayersList = function (newPlayer) {
  // Add new player
  model.addNewPlayer(newPlayer);

  // Display playerList
  playerListView.displayList(model.state.allPlayer);
};

const controlGeneralRandom = function () {
  // General Random
  model.makeGeneralRandom();

  // Display general random list
  generalRandomView.displayList(model.state.randomAllPlayers);
};

const controlInvidualRandom = function () {
  // General Invidual
  model.makeInvidualRandom();

  // Display Invidual random list
  model.state.invidualPlayer &&
    invidualRandomView.displayList(model.state.invidualPlayer);
};

const controlRestart = function () {
  // Restart
  model.restart();

  // Display clean window
  containerView.displayList();
};

const controlDeletePlayer = function (deletedIndex) {
  // Delete player
  model.deletePlayer(deletedIndex);

  // Display player list again
  playerListView.displayList(model.state.allPlayer);
};

const controlRestartInvidualList = function () {
  // Update invidual list
  model.restartInvidualList()

  // Display invidual list again
  invidualRandomView.cleanList()
};

const init = function () {
  playerListView.addHandlerAddNewPlayer(controlPlayersList);
  playerListView.addHandlerDeletePlayer(controlDeletePlayer);
  generalRandomView.addHandlerGeneralRandom(controlGeneralRandom);
  invidualRandomView.addHandlerInvidualRandom(controlInvidualRandom);
  invidualRandomView.addHandlerRestartList(controlRestartInvidualList);
  containerView.addHandlerRestart(controlRestart);
  containerView.addHandlerInfoInput();
};
init();

