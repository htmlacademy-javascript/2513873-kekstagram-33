import { paintPreviews } from './paint-previews.js';
import { showFullscreenPhoto } from './gallery.js';
import { showDataError } from './errors-and-success.js';
import { sortPhotos } from './filters-change.js';

const URL_DATA_GET = 'https://32.javascript.htmlacademy.pro/kekstagram/data';
const URL_DATA_SEND = 'https://32.javascript.htmlacademy.pro/kekstagram';
const SEND_METHOD = 'POST';
const imagesFilters = document.querySelector('.img-filters');

const getData = () => {
  fetch(URL_DATA_GET)
    .then((response) => response.json())
    .then((previews) => {
      paintPreviews(previews);
      showFullscreenPhoto(previews);
      sortPhotos(previews);
      imagesFilters.classList.remove('img-filters--inactive');
    })
    .catch(() => {
      showDataError();
    });
};

const sendData = (body) => fetch(
  URL_DATA_SEND,
  {
    method: SEND_METHOD,
    body,
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
  })
  .catch(() => {
    throw new Error();
  });

export { getData, sendData };
