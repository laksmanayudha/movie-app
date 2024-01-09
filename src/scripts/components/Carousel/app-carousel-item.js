class AppCarouselItem extends HTMLElement {
  constructor() {
    super();
    this.childrenHTML = this.innerHTML;
    this.active = this.hasAttribute('active');
    this.image = this.getAttribute('image') || null;
    this.align = this.getAttribute('align') || 'left';
    this.label = this.getAttribute('label') || null;
    this.description = this.getAttribute('description') || null;
    this.alignType = {
      left: 'text-start',
      center: 'text-center',
      right: 'text-end',
    };
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="carousel-item ${this.active ? 'active' : ''}">
        <img src="${this.image}" class="d-block w-100" alt="Carousel Image">
        <div class="carousel-caption d-none d-md-block ${this.alignType[this.align]}">
          <h2>${this.label}</h2>
          <p>${this.description}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('app-carousel-item', AppCarouselItem);
