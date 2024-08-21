class FleytMain {
  constructor() {
    this.setColor = 2;
    this.colorsList = ['white', 'black', 'red', 'other'];

    document.addEventListener("scroll", (e) => {
      this.scrollEvent();
    });

    this.scrollEvent();
  }

  scrollEvent() {
    this.introParallax();
    this.startAnimation(document.getElementById("about-video").parentElement, "about__video-preview--play");

    this.startAnimation(document.getElementById("construction-unit"), "construction__unit--view");
    this.startAnimation(document.getElementById("construction-2-row"), "construction__2-row--view");

    this.parallaxAnimation(document.getElementById("effect-animation"), "effect__anim-wrapper--view");
    this.parallaxAnimation(document.getElementById("gallery"), "gallery--view", 0, false);
  }

  introParallax() {
    if (document.body.scrollTop > 580 || document.documentElement.scrollTop > 580) {
      document.getElementById("intro-image").classList.add("intro__image--parallax");
    } else {
      document.getElementById("intro-image").classList.remove("intro__image--parallax");
    }
  }

  parallaxAnimation (actionEl, animClass, dT = 150, isCenter = true){
    if(actionEl === undefined || typeof actionEl !== 'object') {
      return;
    }

    let rect = actionEl.getBoundingClientRect();
    if ((window.outerHeight - actionEl.clientHeight) / (isCenter ? 2 : 1) + dT > rect.top) {
      actionEl.classList.add(animClass);
    } else {
      actionEl.classList.remove(animClass);
    }
  }

  startAnimation(actionEl, animClass){
    if(actionEl === undefined || typeof actionEl !== 'object') {
      return;
    }

    let rect = actionEl.getBoundingClientRect();
    if (window.outerHeight - actionEl.clientHeight > rect.top && rect.top < window.outerHeight / 2.2) {
      actionEl.classList.add(animClass);
    }
  }

  playIntro(el) {
    if(el === undefined) {
      return;
    }
    el.classList.add("about__video-preview--play");
    const url = el.children[0]?.src;
    if(url) {
      el.children[0].src = "";
      el.children[0].src = url;
    }
  }

  selectColor(className, el) {
    const root = document.getElementById(el);
    if (root === undefined) {
      return;
    }

    this.colorsList.forEach((name) => root.classList.remove(name));
    root.classList.add(className);

    window.event.stopPropagation();
  }

  nextColor(el) {
    this.setColor = (this.setColor + 1)  % 4;

    this.selectColor(this.colorsList[this.setColor], el);
  }
}

(function (w) {
  w.fleytMain = new FleytMain();
})(window);
