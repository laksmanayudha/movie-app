import './movie-detail-review';
import '../Card/swiper-container';
import '../Card/movie-card';
import '../Form/load-more-button';

class MovieDetailModal extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set detail(detail) {
    this._detail = detail;
  }

  render() {
    const swiper = document.createElement('swiper-container');
    swiper.breakPoints = {
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    };
    swiper.movies = [
      {
        title: 'Iron man',
        image: 'https://dummyimage.com/600x400/947894/fff',
        description: 'Some Heroes',
      },
      {
        title: 'Iron man',
        image: 'https://dummyimage.com/600x400/947894/fff',
        description: 'Some Heroes',
      },
      {
        title: 'Iron man',
        image: 'https://dummyimage.com/600x400/947894/fff',
        description: 'Some Heroes',
      },
      {
        title: 'Iron man',
        image: 'https://dummyimage.com/600x400/947894/fff',
        description: 'Some Heroes',
      },
      {
        title: 'Iron man',
        image: 'https://dummyimage.com/600x400/947894/fff',
        description: 'Some Heroes',
      },
    ];

    const review = document.createElement('movie-detail-review');
    review.review = {};

    this.innerHTML = `
      <div class="modal fade" tabindex="-1" id="movieDetailModal">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">The Brothers Sun (2024)</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-5">
                    <div class="d-flex justify-content-center">
                      <div class="movie-item">
                        <img src="https://dummyimage.com/600x400/947894/fff" class="card-img img-fit" alt="movie list">
                      </div>
                    </div>
                  </div>
                  <div class="col-md-7">
                    <dl>
                      <dt>Overview</dt>
                      <dd>When a mysterious enemy targets his family, a Taipei triad member heads to Los Angeles to protect his strong-willed mother and oblivious younger brother.</dd>
                      <dt>Release Date</dt>
                      <dd>07/19/2023</dd>
                      <dt>Genres</dt>
                      <dd>Action, Crime, Thriller</dd>
                      <dt>Rating</dt>
                      <dd>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        8.1 / 10
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div class="container-fluid">
                <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">Cast</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Review</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Recomendations</a>
                  </li>
                </ul>
                <div class="mt-3" id="tabContainer">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // this.querySelector('#tabContainer').appendChild(swiper);
    this.querySelector('#tabContainer').appendChild(review);
  }
}

customElements.define('movie-detail-modal', MovieDetailModal);
