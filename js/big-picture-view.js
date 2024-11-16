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

const createComments = (preview) => {
  const commentsCount = preview.comments.length;
  shownCommentsCount.textContent = commentsCount;
  totalCommentsCount.textContent = commentsCount;

  socialComments.innerHTML = '';
  preview.comments.forEach((comment) => {
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

const paintBigPhoto = (preview) => {
  const comments = preview.comments;
  bigPicture.querySelector('.big-picture__img').src = preview.url;
  bigPicture.querySelector('.big-picture__img').alt = preview.description;
  bigPicture.querySelector('.likes-count').textContent = preview.likes;
  bigPicture.querySelector('.social__caption').textContent = preview.description;
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

const openBigPhoto = (preview) => {
  bigPicture.classList.remove('hidden');
  document.addEventListener('keydown', onBigPhotoEscKeydown);
  body.classList.add('modal-open');
  commentsLoader.classList.add('hidden');
  commentsCounter.classList.add('hidden');
  closeBigPictureButton.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
  });

  paintBigPhoto(preview);
};

// Закрывает большое фото

const closeBigPhoto = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onBigPhotoEscKeydown);
};

export {createComments, openBigPhoto, closeBigPhoto};
