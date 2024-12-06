import { paintPreviews } from './paint-previews.js';
import { debounce } from './util.js';

const RANDOM_PHOTOS_COUNT = 10;
const DEBOUNCE_DELAY = 500;

const filtersContainer = document.querySelector('.img-filters');
const filterButtons = filtersContainer.querySelectorAll('.img-filters__button');

const changeFilter = (filter) => {
  filterButtons.forEach((button) => {
    button.classList.remove('img-filters__button--active');
  });
  filter.classList.add('img-filters__button--active');
  return filter.id;
};

const sortArrayByComments = (a, b) => b.comments.length - a.comments.length;

const sortPhotos = (previews, onPhotoClick) => {
  const sortPhotosWithDebounce = debounce((filterType) => {
    let sortingPhotos = previews;
    switch (filterType) {
      case 'filter-random':
        sortingPhotos = previews.slice(0, RANDOM_PHOTOS_COUNT);
        break;
      case 'filter-discussed':
        sortingPhotos = previews.slice().sort(sortArrayByComments);
        break;
      default:
        sortingPhotos = previews;
        break;
    }
    paintPreviews(sortingPhotos, onPhotoClick);
  }, DEBOUNCE_DELAY);

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filterType = changeFilter(button);
      sortPhotosWithDebounce(filterType);
    });
  });
};

export { sortPhotos };
