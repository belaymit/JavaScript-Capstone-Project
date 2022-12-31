import {
  movieDetailsPopup, movieCloseBtn, commentBtn, movieDetail,
} from './constants.js';

const showMovieDetail = () => {
  movieDetailsPopup.classList.add('show-movie');
  movieDetail.classList.add('movie-detail');
};

const closePopup = () => {
  movieDetailsPopup.classList.remove('show-movie');
  movieDetail.classList.remove('movie-detail');
};

const eventHandler = () => {
  commentBtn.addEventListener('click', showMovieDetail);
  movieCloseBtn.addEventListener('click', closePopup);
};

export default eventHandler;