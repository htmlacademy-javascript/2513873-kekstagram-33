import {makeSimilarPhotoSpecifications} from './data-create.js';

const photosContainer = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content;
const crateUsersPhotos = makeSimilarPhotoSpecifications();

const fragment = document.createDocumentFragment();

crateUsersPhotos.forEach(({url, description, comments, likes}) => {
  const userPhotoContainer = templatePicture.cloneNode(true);
  userPhotoContainer.querySelector('.picture__img').src = url;
  userPhotoContainer.querySelector('.picture__img').alt = description;
  userPhotoContainer.querySelector('.picture__comments').textContent = comments;
  userPhotoContainer.querySelector('.picture__likes').textContent = likes;

  fragment.appendChild(userPhotoContainer);
});

photosContainer.appendChild(fragment);