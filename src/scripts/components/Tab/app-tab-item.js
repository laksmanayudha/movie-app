class AppTabItem extends HTMLElement {
  constructor() {
    super();
    this._title = this.getAttribute('title') || null;
    this._active = this.hasAttribute('active');
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'active') this._active = this.hasAttribute('active');
    this.render();
  }

  static get observedAttributes() {
    return ['active'];
  }

  render() {
    this.innerHTML = `
      <li class="nav-item">
        <a class="nav-link ${this._active ? 'active' : ''}" href="#">${this._title}</a>
      </li>
    `;
  }
}

customElements.define('app-tab-item', AppTabItem);
