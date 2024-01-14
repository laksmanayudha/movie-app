import './components/Navbar/app-navbar';
import './components/Navbar/app-navbar-item';
import './components/Carousel/app-carousel';
import './components/Footer/app-footer';
import './components/Footer/app-footer-item';
import './components/Tab/app-tab';
import './components/Tab/app-tab-item';
import './components/Card/swiper-container';
import './components/Card/grid-container';
import './components/Form/load-more-button';
import './components/Form/movie-filter';
import './components/Modal/movie-detail-modal';

const main = () => {
  const movies = [
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
  const slides = [
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

  const carousel = document.querySelector('app-carousel');
  const swiperContainer = document.querySelector('swiper-container');
  const gridContainer = document.querySelector('grid-container');

  carousel.slides = slides;
  swiperContainer.breakPoints = {
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
  };
  swiperContainer.movies = movies;
  gridContainer.movies = movies;
};

export default main;
