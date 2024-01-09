import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import './swiper-slide';
import './movie-card';

class SwiperCardContainer extends HTMLElement {
  constructor() {
    super();
    this.childrenHTML = this.innerHTML;
    this.movies = [];
    this.swiper = null;
    this.withNavigation = this.hasAttribute('withNavigation');
  }

  connectedCallback() {
    this.render();
    this.childrenHTML = null;
  }

  render() {
    // generate content
    const content = this.movies.map((movie) => {
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
          ${this.childrenHTML || content}
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
      spaceBetween: 30,
      freeMode: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
      },
    });
  }
}

customElements.define('swiper-container', SwiperCardContainer);
