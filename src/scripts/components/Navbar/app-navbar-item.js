class AppNavbarItem extends HTMLElement {
  constructor() {
    super();
    this.target = this.getAttribute('target') || null;
    this.title = this.getAttribute('title') || null;
    this.active = this.getAttribute('active') || false;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <li class="nav-item">
        <a class="nav-link ${this.active ? 'active' : ''}" href="${this.target}">
          ${this.title}
        </a>
      </li>
    `;
  }
}

customElements.define('app-navbar-item', AppNavbarItem);
