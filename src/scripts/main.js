import $ from 'jquery';
import DataStore from './data/data-store';
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
import {
  trimPath,
  fader,
  formatDate,
  roundRating,
} from './helpers/helper';

let movieDetail = {};
const search = { keyword: '', page: 1, results: [] };

const pushSearchMovies = (movies = []) => {
  search.results = [...search.results, ...movies];
  return search.results;
};

const resetSearchMovies = () => {
  search.results = [];
  return search.results;
};

const getTrendingMovies = async (type) => {
  if (type === 'now-playing') {
    const movies = await DataStore.getNowPlaying(1);
    return movies;
  }

  if (type === 'popular') {
    const movies = await DataStore.getPopular(1);
    return movies;
  }

  if (type === 'top-rated') {
    const movies = await DataStore.getTopRated(1);
    return movies;
  }

  if (type === 'upcoming') {
    const movies = await DataStore.getUpcoming(1);
    return movies;
  }

  return [];
};

const main = async () => {
  const slides = DataStore.getCarouselData();
  const [
    configuration,
    nowPlaying,
    tmdbTrending,
  ] = await DataStore.pool([
    DataStore.getConfiguration(),
    DataStore.getNowPlaying(1),
    DataStore.getTMDBTrending(),
  ]);

  const baseImageUrl = trimPath(configuration.images.secure_base_url);
  const posterImageSize = configuration.images.poster_sizes[4] || 'w500';
  const carousel = document.querySelector('app-carousel');
  const swiperContainer = document.querySelector('swiper-container');
  const gridContainer = document.querySelector('grid-container');
  const movieFilter = document.querySelector('movie-filter');
  const searchLoadMoreButton = document.querySelector('load-more-button#searchLoadMoreButton');
  const movieDetailModal = document.querySelector('movie-detail-modal');

  const showMovieDetail = async (card) => {
    const movieId = card.dataset.id;
    const { fadeIn, fadeOut } = fader(card);

    fadeOut();
    movieDetail = await DataStore.getMovieDetail(movieId, ['reviews', 'casts', 'recommendations']);
    fadeIn();

    const casts = movieDetail.casts.cast.map((cast) => ({
      name: cast.name,
      image: cast.profile_path ? `${baseImageUrl}/${posterImageSize}/${trimPath(cast.profile_path)}` : '/assets/img/noimage.png',
      character: cast.character,
    }));
    const reviews = movieDetail.reviews.results.map((review) => ({
      author: review.author,
      avatarPath: review.author_details.avatar_path ? `${baseImageUrl}/${posterImageSize}/${trimPath(review.author_details.avatar_path)}` : '/assets/img/noimage.png',
      rating: roundRating(review.author_details.rating),
      content: review.content,
      updatedAt: formatDate(review.updated_at),
    }));
    movieDetailModal.detail = {
      title: movieDetail.original_title,
      image: movieDetail.poster_path ? `${baseImageUrl}/${posterImageSize}/${trimPath(movieDetail.poster_path)}` : '/assets/img/noimage.png',
      overview: movieDetail.overview,
      releaseDate: formatDate(movieDetail.release_date),
      genres: movieDetail.genres,
      rating: roundRating(movieDetail.vote_average),
      casts,
      reviews,
    };
    movieDetailModal.setAttribute('toggle', 'show');
  };

  // carousel
  carousel.slides = slides;

  // trending swiper breakpoints
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

  // trending swiper movies
  swiperContainer.cards = nowPlaying.map((movie) => ({
    id: movie.id,
    title: movie.title,
    description: formatDate(movie.release_date),
    image: movie.poster_path ? `${baseImageUrl}/${posterImageSize}/${trimPath(movie.poster_path)}` : '/assets/img/noimage.png',
    onclick: showMovieDetail,
  }));

  // initial grid search movies
  gridContainer.cards = tmdbTrending.map((movie) => ({
    id: movie.id,
    title: movie.title,
    description: formatDate(movie.release_date),
    image: movie.poster_path ? `${baseImageUrl}/${posterImageSize}/${trimPath(movie.poster_path)}` : '/assets/img/noimage.png',
    onclick: showMovieDetail,
  }));

  // movie filter
  movieFilter.onSearchSubmit = async (keyword) => {
    resetSearchMovies();
    search.keyword = keyword;
    const { fadeIn, fadeOut } = fader(gridContainer);

    // get search data
    fadeOut();
    const results = await DataStore.getSearchMovies(keyword, 1);
    const movies = pushSearchMovies(results);
    gridContainer.cards = movies.map((movie) => ({
      id: movie.id,
      title: movie.title,
      description: formatDate(movie.release_date),
      image: movie.poster_path ? `${baseImageUrl}/${posterImageSize}/${trimPath(movie.poster_path)}` : '/assets/img/noimage.png',
      onclick: showMovieDetail,
    }));
    fadeIn();

    // set search result keyword
    $('#searchResult').text(keyword ? `"${keyword}"` : 'no keyword');

    // add or remove load more button
    if (movies.length) {
      $('#searchLoadMoreButton').removeAttr('hidden');
    } else {
      $('#searchLoadMoreButton').attr('hidden', true);
    }
  };

  // movie filter load more
  searchLoadMoreButton.onclick = async () => {
    const { fadeIn, fadeOut } = fader(searchLoadMoreButton);

    fadeOut();
    const results = await DataStore.getSearchMovies(search.keyword, search.page + 1);
    if (results.length) {
      search.page += 1;
      const movies = pushSearchMovies(results);
      gridContainer.cards = movies.map((movie) => ({
        id: movie.id,
        title: movie.title,
        description: formatDate(movie.release_date),
        image: movie.poster_path ? `${baseImageUrl}/${posterImageSize}/${trimPath(movie.poster_path)}` : '/assets/img/noimage.png',
        onclick: showMovieDetail,
      }));
    }
    fadeIn();
  };

  // trending tab
  $('#trendingSection app-tab-item').on('click', async function (e) {
    e.preventDefault();

    // set active tab
    $('#trendingSection app-tab-item').removeAttr('active');
    $(this).attr('active', true);

    // get data trending
    const { fadeIn, fadeOut } = fader($('#trendingSection swiper-container'));
    const trendingType = $(this).data('type');

    fadeOut();
    const movies = await getTrendingMovies(trendingType);
    swiperContainer.cards = movies.map((movie) => ({
      id: movie.id,
      title: movie.title,
      description: formatDate(movie.release_date),
      image: movie.poster_path ? `${baseImageUrl}/${posterImageSize}/${trimPath(movie.poster_path)}` : '/assets/img/noimage.png',
      onclick: showMovieDetail,
    }));
    fadeIn();
  });
};

export default main;
