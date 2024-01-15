import $ from 'jquery';
import moment from 'moment';

const trimPath = (path) => path.replace(/\/$/, '').replace(/\/$/, '');
const fader = (element) => ({
  fadeIn: () => $(element).fadeIn('slow'),
  fadeOut: () => $(element).fadeOut('slow'),
});
const formatDate = (date, format = 'd MMM YYYY') => moment(date).format(format);

export { trimPath, fader, formatDate };
