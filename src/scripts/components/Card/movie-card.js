class MovieCard extends HTMLElement {
  constructor() {
    super();
    this.image = this.getAttribute('image') || null;
    this.title = this.getAttribute('title') || null;
    this.description = this.getAttribute('description') || null;
    this.movie = {
      image: this.image,
      title: this.title,
      description: this.description,
    };
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  static get observedAttributes() {
    return ['movie'];
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    const { image, title, description } = this._movie;
    this.innerHTML = `
      <div class="card movie-list__item">
        <img src="${image}" class="card-img" alt="movie image">
        <div class="card-img-overlay">
          <div class="h-100 d-flex flex-column justify-content-end">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description}</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('movie-card', MovieCard);
