import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import './swiper-slide';
import './app-card';

class SwiperCardContainer extends HTMLElement {
  constructor() {
    super();
    this.withNavigation = this.hasAttribute('withNavigation');
  }

  set cards(cards) {
    this._cards = cards;
    this.render();
  }

  set breakPoints(breakpoints) {
    this._breakPoints = breakpoints;
  }

  render() {
    const cards = this._cards || [];
    this.innerHTML = `
      <div class="swiper">
        <div class="swiper-wrapper"></div>
        ${this.withNavigation
          ? `
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>`
          : ''
        }
      </div>
    `;

    // insert cards
    const swiperWrapper = this.querySelector('.swiper-wrapper');
    cards.forEach((card) => {
      const swiperSlide = document.createElement('swiper-slide');
      const cardElement = document.createElement('app-card');
      cardElement.card = card;
      swiperSlide.appendChild(cardElement);
      swiperWrapper.appendChild(swiperSlide);
    });

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
