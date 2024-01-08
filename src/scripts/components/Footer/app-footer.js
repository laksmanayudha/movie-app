class AppFooter extends HTMLElement {
  constructor() {
    super();
    this.childrenHTML = this.innerHTML;
    this.copyRightYear = this.getAttribute('copyRightYear');
    this.companyName = this.getAttribute('companyName');
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="container py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        ${this.childrenHTML}
      </ul>
      <p class="text-center text-body-secondary">© ${this.copyRightYear} ${this.companyName}</p>
    </footer>
    `;
  }
}

customElements.define('app-footer', AppFooter);
