class AppCarouselItem extends HTMLElement {
  constructor() {
    super();
    this.childrenHTML = this.innerHTML;
    this.alignType = {
      left: 'text-start',
      center: 'text-center',
      right: 'text-end',
    };
  }

  set slide(slide) {
    this._slide = slide;
    this.render();
  }

  render() {
    const {
        active,
        image,
        description,
        align,
        label,
    } = this._slide;

    this.innerHTML = `
      <div class="carousel-item ${active ? 'active' : ''}" style="height: 450px;">
        <div class="backdrop"></div>
        <img src="${image}" class="d-block w-100 img-fit" alt="Carousel Image">
        <div class="carousel-caption d-none d-md-block ${this.alignType[align]}">
          <h2>${label}</h2>
          <p>${description}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('app-carousel-item', AppCarouselItem);
