import { makeSimilarPhotoSpecifications } from './data-create.js';

const photosContainer = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content;
const crateUsersPhotos = makeSimilarPhotoSpecifications();

const fragment = document.createDocumentFragment();

const createPreviews = () => {
  crateUsersPhotos.forEach(({ url, description, comments, likes, id }) => {
    const userPhotoContainer = templatePicture.cloneNode(true);
    const photo = userPhotoContainer.querySelector('.picture');
    photo.dataset.id = id;
    userPhotoContainer.querySelector('.picture__img').src = url;
    userPhotoContainer.querySelector('.picture__img').alt = description;
    userPhotoContainer.querySelector('.picture__comments').textContent = comments.length;
    userPhotoContainer.querySelector('.picture__likes').textContent = likes;

    fragment.appendChild(userPhotoContainer);
  });
  return fragment;
};

photosContainer.appendChild(createPreviews());

export {createPreviews};
