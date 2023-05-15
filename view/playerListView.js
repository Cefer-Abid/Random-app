import { addPlayersToList } from "../helper.js";

class PlayerListView {
  formEl = document.querySelector(".form");
  playersContainer = document.querySelector(".players--list");
  container = document.querySelector(".container");

  displayList(players) {
    addPlayersToList(players, this.playersContainer);
  }

  addHandlerAddNewPlayer(handler) {
    this.formEl.addEventListener("submit", function (e) {
      e.preventDefault();
      const newPlayer = document.querySelector(".input");
      if (!newPlayer.value) return;

      handler(newPlayer.value);
      newPlayer.value = "";
    });
  }

  addHandlerDeletePlayer(handler) {
    this.container.addEventListener("click", function (e) {
      if (!e.target.closest(".player--list__icon")) return;

      const deletedIndex = +e.target.dataset.index;
      handler(deletedIndex);
    });
  }
}

export default new PlayerListView();
