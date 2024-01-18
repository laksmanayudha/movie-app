import './movie-detail-review';
import '../Card/swiper-container';
import '../Card/app-card';
import '../Form/load-more-button';
import '../Tab/app-tab';
import '../Tab/app-tab-item';
import * as bootstrap from 'bootstrap';

class MovieDetailModal extends HTMLElement {
  constructor() {
    super();
    this._detail = {};
    this._tab = 'casts';
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
    this.render();
    this.setTabContent();
  }

  static get observedAttributes() {
    return ['toggle', 'detail'];
  }

  set detail(detail) {
    this._detail = detail;
  }

  setTabContent() {
    const { casts = [], reviews = [] } = this._detail;
    const tabPanel = this.querySelector('#tabPanel');

    // reset tab
    tabPanel.innerHTML = '';

    // set tab content
    if (this._tab === 'casts') {
      const swiperContainer = document.createElement('swiper-container');
      swiperContainer.breakPoints = {
        576: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      };

      swiperContainer.cards = casts.map((cast) => ({
        title: cast.name,
        image: cast.image,
        description: cast.character,
      }));
      tabPanel.appendChild(swiperContainer);
    }

    if (this._tab === 'reviews') {
      if (!reviews.length) {
        tabPanel.innerHTML = 'No review available';
      } else {
        reviews.forEach((review) => {
          const movieReviewElement = document.createElement('movie-detail-review');
          movieReviewElement.review = review;
          tabPanel.appendChild(movieReviewElement);
        });
      }
    }
  }

  render() {
    const {
      title,
      image,
      overview,
      releaseDate,
      genres,
      rating,
    } = this._detail;

    const genreContent = (genres || []).map((genre) => genre.name).join(', ');
    this.innerHTML = `
      <div class="modal fade" tabindex="-1">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${title}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="d-flex justify-content-center">
                      <div class="card-item">
                        <img src="${image}" class="card-img img-fit rounded" alt="movie list">
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <dl>
                      <dt>Overview</dt>
                      <dd>${overview}</dd>
                      <dt>Release Date</dt>
                      <dd>${releaseDate}</dd>
                      <dt>Genres</dt>
                      <dd>${genreContent}</dd>
                      <dt>Rating</dt>
                      <dd>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        ${rating} / 10
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div class="container-fluid mt-2">
                <app-tab>
                  <app-tab-item title="Casts" active data-type="casts"></app-tab-item>
                  <app-tab-item title="Reviews" data-type="reviews"></app-tab-item>
                </app-tab>
                <hr/>
                <div id="tabPanel">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // show modal
    if (this.toggle === 'show') {
      this._tab = 'casts';
      const modal = new bootstrap.Modal(this.querySelector('.modal'));
      modal.show();
    }

    // on tab click
    const tabItems = this.querySelectorAll('app-tab-item');
    tabItems.forEach((tabItem) => {
      tabItem.onclick = () => {
        tabItems.forEach((tab) => tab.removeAttribute('active'));
        tabItem.setAttribute('active', true);
        this._tab = tabItem.dataset.type;
        this.setTabContent();
      };
    });
  }
}

customElements.define('movie-detail-modal', MovieDetailModal);
