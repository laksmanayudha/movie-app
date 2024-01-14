class MovieFilter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set categories(categories) {
    this._categories = categories;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="accordion" id="filterAccordion">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#filterOne" aria-expanded="true" aria-controls="filterOne">
            <span>by Title or Name</span>
          </button>
        </h2>
        <div id="filterOne" class="accordion-collapse collapse show" data-bs-parent="#filterAccordion">
          <div class="accordion-body">
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="keywordInput" placeholder="title or name">
              <label for="keywordInput">Search movies</label>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#filterTwo" aria-expanded="true" aria-controls="filterTwo">
            <span>by Categories</span>
          </button>
        </h2>
        <div id="filterTwo" class="accordion-collapse collapse show" data-bs-parent="#filterAccordion">
          <div class="accordion-body">
            <div class="d-flex flex-wrap gap-2">
              <a href="#" class="border px-2 py-1 rounded text-decoration-none text-bg-primary">Action</a>
              <a href="#" class="border px-2 py-1 rounded text-decoration-none">Drama</a>
              <a href="#" class="border px-2 py-1 rounded text-decoration-none">Comedy</a>
              <a href="#" class="border px-2 py-1 rounded text-decoration-none">Horror</a>
              <a href="#" class="border px-2 py-1 rounded text-decoration-none">Thriller</a>
              <a href="#" class="border px-2 py-1 rounded text-decoration-none">Sci-Fi</a>
              <a href="#" class="border px-2 py-1 rounded text-decoration-none">Documentary</a>
              <a href="#" class="border px-2 py-1 rounded text-decoration-none">Romance</a>
              <a href="#" class="border px-2 py-1 rounded text-decoration-none">Crime</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-grid mt-2">
      <button class="btn btn-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
        Search
      </button>
    </div>
    `;
  }
}

customElements.define('movie-filter', MovieFilter);
