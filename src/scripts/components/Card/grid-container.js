import './movie-card';

class GridContainer extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    // ganti content
    const movies = this._movies || [];

    if (!movies.length) {
      this.innerHTML = `
      <div class="container-fluid">
        <div class="p-2 text-muted">No data available</div>
      </div>
      `;
      return;
    }

    const movieCards = movies.map((movie) => {
      const card = document.createElement('movie-card');
      card.movie = movie;
      return `
        <div class="col-sm-6 col-lg-3 mt-4 d-flex justify-content-center" data-bs-toggle="modal" data-bs-target="#movieDetailModal">
          ${card.outerHTML}
        </div>
      `;
    }).join('');

    this.innerHTML = `
    <div class="container-fluid">
      <div class="row">
        ${movieCards}
      </div>
    </div>
    `;
  }
}

customElements.define('grid-container', GridContainer);
