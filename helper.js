const playersListStr = function (player, i) {
  return `
    <li class="list list__player">
      <div class="player--div">
        <span class="player__index">${i + 1}</span>
        <span class="player__name">${player}</span>
      </div>
      <img src="icon-img/icons8-delete-64.png" 
      class="player--list__icon" data-index="${i}"/>
    </li>
    `;
};

const randomListStr = function (player) {
  return `
    <li class="list random--list">
      <div class="player--div">
        <span class="player__name random--list__player">${player}</span>
      </div>
    </li>
    `;
};

export const addNameToList = function (players, element) {
  element.innerHTML = "";
  const str = players
    .map((player, i) => {
      if (element.classList.contains("players--list"))
        return playersListStr(player, i);
      else return randomListStr(player);
    })
    .join("");

  element.insertAdjacentHTML("beforeend", str);
};

export const deleteSpaces = function (arr) {
  arr.map((el, i) => el.trim() === "" && arr.splice(i, 1));
};
