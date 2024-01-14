class LoadMoreButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.style.display = 'grid';
    this.innerHTML = '<button class="btn btn-outline-secondary">Load More</button>';
  }
}

customElements.define('load-more-button', LoadMoreButton);
