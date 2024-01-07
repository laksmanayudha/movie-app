import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const main = () => {
  const swiper = new Swiper('.mySwiper', {
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

  const swiperTwo = new Swiper('.mySwiperTwo', {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
};

export default main;
