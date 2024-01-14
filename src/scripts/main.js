import DataStore from './data/data-store';
import { trimPath } from './helpers/helper';
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

const main = async () => {
  const slides = DataStore.getCarouselData();
  const [
    configuration,
    genres,
    nowPlaying,
  ] = await DataStore.pool([
    DataStore.getConfiguration(),
    DataStore.getGenres(),
    DataStore.getNowPlaying(1),
  ]);
  const baseImageUrl = trimPath(configuration.images.secure_base_url);
  const posterImageSize = configuration.images.poster_sizes[4] || 'w500';
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

  swiperContainer.movies = nowPlaying.map((movie) => ({
    title: movie.title,
    description: movie.release_date,
    image: `${baseImageUrl}/${posterImageSize}/${trimPath(movie.poster_path)}`,
  }));
};

export default main;
