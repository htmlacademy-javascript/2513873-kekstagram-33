import { isEscapeKey } from './util.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const commentsCounter = bigPicture.querySelector('.social__comment-count');
const shownCommentsCount = bigPicture.querySelector('.social__comment-shown-count');
const totalCommentsCount = bigPicture.querySelector('.social__comment-total-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCommentsItem = bigPicture.querySelector('.social__comment');
const closeBigPictureButton = document.querySelector('.big-picture__cancel');

// Создание комментариев

const createComments = (previews) => {
  const commentsCount = previews.comments.length;
  shownCommentsCount.textContent = commentsCount;
  totalCommentsCount.textContent = commentsCount;

  socialComments.innerHTML = '';
  previews.comments.forEach((comment) => {
    const newComment = socialCommentsItem.cloneNode(true);
    const userAvatar = newComment.querySelector('.social__picture');
    const userText = newComment.querySelector('.social__text');

    userAvatar.src = comment.avatar;
    userAvatar.alt = comment.name;
    userText.textContent = comment.message;

    socialComments.appendChild(newComment);
  });
};

// Отрисовка большого фото

const paintBigPhoto = (previews) => {
  const comments = previews.comments;
  bigPicture.querySelector('.big-picture__img').dataset.id = previews.id;
  bigPicture.querySelector('.big-picture__img img').src = previews.url;
  bigPicture.querySelector('.big-picture__img img').alt = previews.description;
  bigPicture.querySelector('.likes-count').textContent = previews.likes;
  bigPicture.querySelector('.social__caption').textContent = previews.description;
  createComments(comments);
};

// Закрытие по escape

const onBigPhotoEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

// Открывает большое фото

const openBigPhoto = (previews) => {
  bigPicture.classList.remove('hidden');
  document.addEventListener('keydown', onBigPhotoEscKeydown);
  body.classList.add('modal-open');
  commentsLoader.classList.add('hidden');
  commentsCounter.classList.add('hidden');
  closeBigPictureButton.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
  });

  paintBigPhoto(previews);
};

// Закрывает большое фото

const closeBigPhoto = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onBigPhotoEscKeydown);
};

export {createComments, openBigPhoto, closeBigPhoto};
