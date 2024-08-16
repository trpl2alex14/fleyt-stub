scrollFunction();

window.playIntro = function (el) {
  el.classList.add("about__video-preview--play");
  const url = el.children[0].src;
  el.children[0].src= "";
  el.children[0].src = url;
}

window.selectColor = function (className, el) {
  const root = document.getElementById(el);
  if(root === undefined) {
    return;
  }

  root.classList.remove('red');
  root.classList.remove('black');
  root.classList.remove('white');
  root.classList.remove('other');
  root.classList.add(className);
}

window.openMenu = function () {
  window.isOpenMenu = !window.isOpenMenu;
  if(window.isOpenMenu) {
    document.getElementById("header").classList.add("header--open");
    document.body.style.overflow = "hidden";
  }else {
    document.getElementById("header").classList.remove("header--open");
    document.body.style.overflow = "auto";
  }
}

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").classList.add("header--small");

    document.getElementById("intro-image").classList.add("intro__image--parallax");
  } else {
    document.getElementById("header").classList.remove("header--small");

    document.getElementById("intro-image").classList.remove("intro__image--parallax");
  }

  let actionEl = document.getElementById("about-video").parentElement;
  let rect = actionEl.getBoundingClientRect();
  if(window.outerHeight - actionEl.clientHeight > rect.top && rect.top < window.outerHeight / 2.2) {
    actionEl.classList.add("about__video-preview--play");
  }

  actionEl = document.getElementById("construction-unit");
  rect = actionEl.getBoundingClientRect();
  if(window.outerHeight - actionEl.clientHeight > rect.top && rect.top < window.outerHeight / 2.2) {
    actionEl.classList.add("construction__unit--view");
  }

  actionEl = document.getElementById("construction-2-row");
  rect = actionEl.getBoundingClientRect();
  if(window.outerHeight - actionEl.clientHeight > rect.top && rect.top < window.outerHeight / 2.2) {
    actionEl.classList.add("construction__2-row--view");
  }

  actionEl = document.getElementById("gallery");
  rect = actionEl.getBoundingClientRect();
  if(window.outerHeight - actionEl.clientHeight - 100 > rect.top) {
    actionEl.classList.add("gallery--view");
  }else {
    actionEl.classList.remove("gallery--view");
  }

  actionEl = document.getElementById("effect-animation");
  rect = actionEl.getBoundingClientRect();
  if(window.outerHeight / 2 - actionEl.clientHeight/2 + 50 > rect.top) {
    actionEl.classList.add("effect__anim-wrapper--view");
  }else {
    actionEl.classList.remove("effect__anim-wrapper--view");
  }
}
