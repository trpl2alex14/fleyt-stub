class Specs {
  constructor() {
    this.xDown = null;
    this.yDown = null;
    document
      .getElementById("specs-table-params")
      .addEventListener("touchstart", this.handleTouchStart.bind(this), false);
    document
      .getElementById("specs-table-params")
      .addEventListener("touchmove", this.handleTouchMove.bind(this), false);
    document
      .getElementById("specs-table-heat")
      .addEventListener("touchstart", this.handleTouchStart.bind(this), false);
    document
      .getElementById("specs-table-heat")
      .addEventListener("touchmove", this.handleTouchMove.bind(this), false);
  }

  handleTouchStart(evt) {
    const {clientX, clientY} = evt.touches[0];
    this.xDown = clientX;
    this.yDown = clientY;
  }

  handleTouchMove(evt) {
    if (!this.xDown || !this.yDown) {
      return;
    }

    const {clientX, clientY} = evt.touches[0];

    const xDiff = this.xDown - clientX;
    const yDiff = this.yDown - clientY;

    if (Math.abs(xDiff) > Math.abs(yDiff) && xDiff > 0) {
      this.next();
    } else if (Math.abs(xDiff) > Math.abs(yDiff)) {
      this.prev();
    }

    this.xDown = this.yDown = null;
  }

  next() {
    document.getElementById("specs-table-heat").classList.add("specs__table--left");
    document.getElementById("specs-table-params").classList.add("specs__table--left");
  }

  prev() {
    document.getElementById("specs-table-heat").classList.remove("specs__table--left");
    document.getElementById("specs-table-params").classList.remove("specs__table--left");
  }
}

(function (w) {
  w.specs = new Specs();
})(window);
