class AppFooterItem extends HTMLElement {
  constructor() {
    super();
    this.childrenHTML = this.innerHTML;
    this.target = this.getAttribute('target') || '#';
    this.title = this.getAttribute('title') || null;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <li class="nav-item">
        <a href="${this.target}" class="nav-link px-2 text-body-secondary">
          ${this.title}
        </a>
      </li>
    `;
  }
}

customElements.define('app-footer-item', AppFooterItem);
