import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import './components/Navbar/app-navbar';
import './components/Navbar/app-navbar-item';
import './components/Carousel/app-carousel';
import './components/Footer/app-footer';
import './components/Footer/app-footer-item';
import './components/Tab/app-tab';
import './components/Tab/app-tab-item';
import './components/Card/swiper-container';

const main = () => {
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
