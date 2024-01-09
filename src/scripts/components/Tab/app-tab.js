class AppTab extends HTMLElement {
  constructor() {
    super();
    this.childrenHTML = this.innerHTML;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <ul class="nav nav-underline">
        ${this.childrenHTML}
      </ul>
    `;
  }
}

customElements.define('app-tab', AppTab);
