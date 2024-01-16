import { loader } from '../../helpers/helper';

class MovieFilter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set onSearchSubmit(onSearchSubmit = async () => {}) {
    this._onSearchSubmit = onSearchSubmit;
  }

  render() {
    this.innerHTML = `
      <div class="card">
        <div class="card-header">
          Find by title or name
        </div>
        <div class="card-body">
          <form action="#" id="searchForm">
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="keywordInput" placeholder="title or name">
              <label for="keywordInput">Search movies</label>
            </div>
            <div class="d-grid mt-2">
              <button class="btn btn-primary" type="submit" id="searchSubmitButton">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    `;

    const searchForm = this.querySelector('#searchForm');
    const submitButton = this.querySelector('#searchSubmitButton');
    const keywordInput = this.querySelector('#keywordInput');
    searchForm.onsubmit = async (e) => {
      e.preventDefault();
      const keyword = keywordInput.value.trim().toLowerCase();
      const { startLoading, stopLoading } = loader(submitButton);
      if (this._onSearchSubmit) {
        startLoading();
        await this._onSearchSubmit(keyword);
        stopLoading();
      }
    };
  }
}

customElements.define('movie-filter', MovieFilter);
