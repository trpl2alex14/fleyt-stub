class CommonFleyt {
  constructor() {
    this.faqs = document.getElementsByClassName("faq__question");
    if (this.faqs !== undefined && typeof this.faqs === 'object') {
      [].forEach.call(this.faqs, (item) => {
        item.parentElement.addEventListener("click", this.openFaq.bind(this, item.parentElement));
      });
    }

    this.filters = document.getElementsByClassName("filter__item");
    if (this.filters !== undefined && typeof this.filters === 'object') {
      [].forEach.call(this.filters, (item) => {
        if (item.classList.contains("filter__item--activate")) {
          this.selectedFilter = item.getAttribute('data-filter-id');
        }
        item.addEventListener("click", this.applyFilter.bind(this, item));
      });
    }
  }

  openFaq(e) {
    [].forEach.call(this.faqs, (item) => {
      item.parentElement.classList.remove("faq__item--open");
    });
    e.classList.add("faq__item--open");
  }

  applyFilter(e) {
    let filterId = e.getAttribute('data-filter-id');
    if (this.selectedFilter === filterId) {
      return;
    }
    this.selectedFilter = filterId;

    [].forEach.call(this.filters, (item) => {
      item.classList.remove("filter__item--activate");
    });
    e.classList.add("filter__item--activate");

    let openContent = document.getElementsByClassName("filter__content--open");
    if (openContent !== undefined && typeof openContent === 'object') {
      [].forEach.call(openContent, (item) => {
        item.classList.remove("filter__content--open");
      });
    }

    const contentEl = document.getElementById("content-" + this.selectedFilter);
    contentEl?.classList.add("filter__content--open");

    window.scrollBy({behavior: 'smooth', top: this.findPosition(contentEl)});
  }

  findPosition(obj) {
    let rect = obj.getBoundingClientRect();
    return rect.top - 180;
  }

}

(function (w) {
  w.fleyt = new CommonFleyt();
})(window);
