import './app-carousel-item';

class AppCarousel extends HTMLElement {
  constructor() {
    super();
    this.slides = [];
  }

  connectedCallback() {
    this.render();
  }

  set slides(slides) {
    this._slides = slides;
    this.render();
  }

  render() {
    const indicators = this._slides.map((slide, index) => `
      <button
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide-to="${index}"
        class="${slide.active ? 'active' : ''}"
      ></button>
    `).join('');
    this.innerHTML = `
      <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          ${indicators}
        </div>
        <div class="carousel-inner" id="carouselInner">
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

    const carouselInner = document.getElementById('carouselInner');
    this._slides.forEach((slide) => {
      const carouselItem = document.createElement('app-carousel-item');
      carouselItem.slide = slide;
      carouselInner.appendChild(carouselItem);
    });
  }
}

customElements.define('app-carousel', AppCarousel);
