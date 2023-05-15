import { addPlayersToList } from "../helper.js";

class InvidualRandomView {
  btn = document.querySelector(".btn-random--invidual");
  playersContainer = document.querySelector(".display--invidual-players");
  restartList = document.querySelector(".btn-random--restart");

  displayList(player) {
    const string = `
    <li class="list random--list random--list__player individual--random--list">${player}</li>
    `;
    this.playersContainer.insertAdjacentHTML("beforeend", string);
  }

  addHandlerInvidualRandom(handler) {
    this.btn.addEventListener("click", handler);
  }

  addHandlerRestartList(handler) {
    this.restartList.addEventListener("click", handler);
  }

  cleanList() {
    this.playersContainer.querySelectorAll("li").forEach((li) => {
      li.remove();
    });
  }
}

export default new InvidualRandomView();
