import $ from 'jquery';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import './swiper-slide';
import './movie-card';

class SwiperCardContainer extends HTMLElement {
  constructor() {
    super();
    this.withNavigation = this.hasAttribute('withNavigation');
  }

  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  set breakPoints(breakpoints) {
    this._breakPoints = breakpoints;
  }

  render() {
    // generate content
    const content = this._movies.map((movie) => {
      const swiperSlide = document.createElement('swiper-slide');
      const movieCard = document.createElement('movie-card');
      movieCard.movie = movie;
      swiperSlide.appendChild(movieCard);
      return swiperSlide.outerHTML;
    }).join('');

    // ganti content
    this.innerHTML = `
      <div class="swiper">
        <div class="swiper-wrapper">
          ${content}
        </div>
        ${this.withNavigation
          ? `
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>`
          : ''
        }
      </div>
    `;

    // trigger swiper
    const swiperContainer = this.querySelector('.swiper');
    this.swiper = new Swiper(swiperContainer, {
      slidesPerView: 1,
      freeMode: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: this._breakPoints,
    });
  }
}

customElements.define('swiper-container', SwiperCardContainer);
