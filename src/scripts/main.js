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
  const carousel = document.querySelector('app-carousel');
  carousel.slides = [
    {
      active: true,
      image: 'https://dummyimage.com/600x400/947894/fff',
      align: 'left',
      label: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolr sit amet lorem ipusm lorem ipsum',
    },
    {
      active: false,
      image: 'https://dummyimage.com/600x400/947894/fff',
      align: 'center',
      label: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolr sit amet lorem ipusm lorem ipsum',
    },
    {
      active: false,
      image: 'https://dummyimage.com/600x400/947894/fff',
      align: 'right',
      label: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolr sit amet lorem ipusm lorem ipsum',
    },
  ];

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
