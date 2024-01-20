import { Tooltip } from 'bootstrap';

class AppCard extends HTMLElement {
  set card(card) {
    this._card = card;
    this.render();
  }

  render() {
    const {
      id = '',
      image = '',
      title = '',
      description = '',
      onclick = async () => {},
    } = this._card;
    this.style.width = '100%';
    this.style.cursor = 'pointer';
    this.dataset.id = id;
    this.innerHTML = `
      <div class="card card-item">
        <img src="${image}" class="card-img img-fit" alt="movie image">
        <div class="card-img-overlay backdrop text-white">
          <div class="h-100 d-flex flex-column justify-content-end">
            <h5
              class="card-title text-ellipsis"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="${title || 'no title'}"
            >${title}</h5>
            <p
              class="card-text fw-light text-ellipsis"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="${description || 'no description'}"
            >${description}</p>
          </div>
        </div>
      </div>
    `;

    const tooltips = this.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltips].forEach((tooltip) => new Tooltip(tooltip));

    this.onclick = async () => {
      await onclick(this);
    };
  }
}

customElements.define('app-card', AppCard);
