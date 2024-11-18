import { openBigPhoto } from './big-picture-view.js';
import { createPreviews } from './paint-previews.js';

const photosContainer = document.querySelector('.pictures');

const showFullscreenPhoto = (previews) => {

  createPreviews(previews);

  photosContainer.addEventListener('click', (evt) => {
    const currentPhoto = evt.target.closest('a');
    if (!currentPhoto) {
      return;
    }

    const photo = previews.find(
      (elem) => elem.id === currentPhoto.id
    );
    openBigPhoto(photo);
  });

};

export { showFullscreenPhoto };
