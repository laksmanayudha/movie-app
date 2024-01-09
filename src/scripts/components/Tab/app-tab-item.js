class AppTabItem extends HTMLElement {
  constructor() {
    super();
    this.title = this.getAttribute('title') || null;
    this.active = this.hasAttribute('active');
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <li class="nav-item">
        <a class="nav-link ${this.active ? 'active' : ''}" href="#">${this.title}</a>
      </li>
    `;
  }
}

customElements.define('app-tab-item', AppTabItem);
