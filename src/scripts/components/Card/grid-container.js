import './app-card';

class GridContainer extends HTMLElement {
  set cards(cards) {
    this._cards = cards;
    this.render();
  }

  render() {
    const cards = this._cards || [];

    this.innerHTML = `
      <div class="container-fluid">
        <div class="row grid-wrapper"></div>
      </div>
    `;

    const gridWrapper = this.querySelector('.grid-wrapper');
    if (!cards.length) {
      gridWrapper.innerHTML = '<div class="p-2 text-muted">No data available</div>';
      return;
    }

    cards.forEach((card) => {
      const gridColumn = document.createElement('div');
      gridColumn.classList.add('col-sm-6');
      gridColumn.classList.add('col-lg-3');
      gridColumn.classList.add('mt-4');
      gridColumn.classList.add('d-flex');
      gridColumn.classList.add('justify-content-center');
      const cardElement = document.createElement('app-card');
      cardElement.card = card;
      gridColumn.appendChild(cardElement);
      gridWrapper.appendChild(gridColumn);
    });
  }
}

customElements.define('grid-container', GridContainer);
