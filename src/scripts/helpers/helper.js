import $ from 'jquery';
import moment from 'moment';

const trimPath = (path) => path.replace(/\/$/, '').replace(/\/$/, '');
const fader = (element) => ({
  fadeIn: () => $(element).fadeIn('slow'),
  fadeOut: () => $(element).fadeOut('slow'),
});
const formatDate = (date, format = 'd MMM YYYY') => moment(date).format(format);
const loader = (element, message = 'Loading...') => {
  const defaultContent = $(element).html();
  return {
    startLoading: () => {
      $(element).html(message).prop('disabled', true);
    },
    stopLoading: () => {
      $(element).html(defaultContent).prop('disabled', false);
    },
  };
};
const roundRating = (value) => Math.round(value);

export {
  trimPath,
  fader,
  formatDate,
  loader,
  roundRating,
};
