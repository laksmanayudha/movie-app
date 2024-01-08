class AppCarousel extends HTMLElement {
  constructor() {
    super();
    this.childrenHTML = this.innerHTML;
  }

  connectedCallback() {
    this.render();
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
          <div class="carousel-item active">
            <img src="https://dummyimage.com/600x200/947894/fff" class="d-block w-100" alt="Images">
            <div class="carousel-caption d-none d-md-block text-start">
              <h2>First slide label</h2>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://dummyimage.com/600x200/947894/fff" class="d-block w-100" alt="Images">
            <div class="carousel-caption d-none d-md-block">
              <h2>Second slide label</h2>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://dummyimage.com/600x200/947894/fff" class="d-block w-100" alt="Images">
            <div class="carousel-caption d-none d-md-block text-end">
              <h2>Third slide label</h2>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
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
