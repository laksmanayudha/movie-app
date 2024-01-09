class AppCarousel extends HTMLElement {
  constructor() {
    super();
    this.childrenHTML = this.innerHTML;
    this.activeIndex = this.getAttribute('activeIndex') || 1;
    this.slides = [];
  }

  connectedCallback() {
    this.render();
    this.childrenHTML = null;
  }

  render() {
    this.innerHTML = `
      <div id="heroCarousel" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" class="active"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
        </div>
        <div class="carousel-inner">
          ${this.childrenHTML}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    `;
  }
}

customElements.define('app-carousel', AppCarousel);
