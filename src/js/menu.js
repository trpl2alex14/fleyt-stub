class FleytMenu {
  constructor(name, heightMenu) {
    this.name = name;
    this.root = document.getElementById(this.name);
    this.isOpenMenu = false;
    this.heightMenu = heightMenu ??  this.root.clientHeight;

    this.scrollFunction();

    document.addEventListener("scroll", (e) => {
      this.scrollFunction();
    });
  }

  openMenu() {
    this.isOpenMenu = !this.isOpenMenu;
    if (this.isOpenMenu) {
      this.root.classList.add(this.name + "--open");
      document.body.style.overflow = "hidden";
    } else {
      this.root.classList.remove(this.name + "--open");
      document.body.style.overflow = "auto";
    }
  }

  scrollFunction() {
    if (document.body.scrollTop > this.heightMenu || document.documentElement.scrollTop > this.heightMenu) {
      this.root.classList.add(this.name + "--small");
    } else {
      this.root.classList.remove(this.name + "--small");
    }
  }
}

(function (w) {
  w.menu = new FleytMenu("header", 80);
})(window);


