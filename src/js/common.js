class CommonFleyt {
  constructor() {
    this.faqs = document.getElementsByClassName("faq__question");
    if( this.faqs !== undefined && typeof  this.faqs === 'object'){
      [].forEach.call( this.faqs, (item) => {
        item.parentElement.addEventListener("click", this.openFaq.bind(this, item.parentElement));
      });
    }
  }

  openFaq(e) {
    [].forEach.call( this.faqs, (item) => {
      item.parentElement.classList.remove("faq__item--open");
    });
    e.classList.add("faq__item--open");
  }
}

(function (w) {
  w.fleyt = new CommonFleyt();
})(window);
