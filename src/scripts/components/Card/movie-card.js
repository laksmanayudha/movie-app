class MovieCard extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    const {
      id,
      image,
      title,
      description,
    } = this._movie;
    this.style.width = '100%';
    this.style.cursor = 'pointer';
    this.dataset.movieId = id;
    this.innerHTML = `
      <div class="card movie-item">
        <img src="${image}" class="card-img img-fit" alt="movie image">
        <div class="card-img-overlay backdrop text-white">
          <div class="h-100 d-flex flex-column justify-content-end">
            <h5 class="card-title text-ellipsis">${title}</h5>
            <p class="card-text">${description}</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('movie-card', MovieCard);
