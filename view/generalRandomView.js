import { addPlayersToList } from "../helper.js";

class GeneralRandomView {
  btn = document.querySelector(".btn-random--general");
  playersContainer = document.querySelector(".display--all-players");

  displayList(players) {
    addPlayersToList(players, this.playersContainer);
  }

  addHandlerGeneralRandom(handler) {
    this.btn.addEventListener("click", handler);
  }
}

export default new GeneralRandomView();
