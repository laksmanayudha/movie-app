class MovieCard extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    const { image, title, description } = this._movie;
    this.innerHTML = `
      <div class="card movie-item">
        <img src="${image}" class="card-img img-fit" alt="movie image">
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
