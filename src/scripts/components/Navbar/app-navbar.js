class AppNavbar extends HTMLElement {
  constructor() {
    super();
    this.childrenHTML = this.innerHTML;
    this.brand = this.getAttribute('brand') || null;
    this.image = this.getAttribute('image') || null;
    this.width = this.getAttribute('width') || 40;
    this.height = this.getAttribute('height') || 40;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="${this.image}" alt="${this.brand}" width="${this.width}" height="${this.height}">
            ${this.brand}
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbar">
            <ul class="navbar-nav">
              ${this.childrenHTML}
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('app-navbar', AppNavbar);
