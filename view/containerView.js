class RestartView {
  btn = document.querySelector(".btn-restart");
  infoIcon = document.querySelector(".info-icon--input");

  displayList() {
    window.location.reload();
  }

  addHandlerRestart(handler) {
    this.btn.addEventListener("click", handler);
  }

  toggleInfo() {
    setTimeout(() => {
      document.querySelector(".info-icon--text").classList.toggle("hidden");
    }, 150);
  }

  addHandlerInfoInput() {
    this.infoIcon.addEventListener("mouseout", this.toggleInfo.bind(this));
    this.infoIcon.addEventListener("mouseover", this.toggleInfo.bind(this));
  }
}

export default new RestartView();
