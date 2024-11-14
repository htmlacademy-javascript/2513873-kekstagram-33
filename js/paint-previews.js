import { makeSimilarPhotoSpecifications } from './data-create.js';
import './big-picture-view.js';

const photosContainer = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content;
const crateUsersPhotos = makeSimilarPhotoSpecifications();

const fragment = document.createDocumentFragment();

const createPreviews = () => {
  crateUsersPhotos.forEach(({ url, description, comments, likes }) => {
    const userPhotoContainer = templatePicture.cloneNode(true);
    userPhotoContainer.querySelector('.picture__img').src = url;
    userPhotoContainer.querySelector('.picture__img').alt = description;
    userPhotoContainer.querySelector('.picture__comments').textContent = comments.length;
    userPhotoContainer.querySelector('.picture__likes').textContent = likes;

    fragment.appendChild(userPhotoContainer);
  });
  return fragment;
}

export {createPreviews};

photosContainer.appendChild(createPreviews());



// Большие фото
photosContainer.addEventListener('click', function (evt) {
  evt.target;
});

const bigPicture = document.querySelector('.big-picture');
const socialComments = bigPicture.querySelector('.social__comments');

const commentItem = document.createElement('li');
commentItem.classList.add('social__comment');

const commentImage = document.createElement('img');
commentImage.classList.add('social__picture');
commentImage.src = photosContainer.comments;
commentImage.alt = 'Hi' // createPreviews(comments.name);
commentImage.width = '35';
commentImage.height = '35';
commentItem.appendChild(commentImage);

const commentText = document.createElement('p');
commentText.textContent = 'Hello!' // createPreviews(comments.message);
commentItem.appendChild(commentText);

socialComments.appendChild(commentItem);
