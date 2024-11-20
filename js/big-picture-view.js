import { isEscapeKey } from './util.js';

const COMMENTS_VISIBLE = 5;
const COMMENTS_MIN = 0;

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const commentsCounter = bigPicture.querySelector('.social__comment-count');
const shownCommentsCounter = commentsCounter.querySelector('.social__comment-shown-count');
const totalCommentsCounter = commentsCounter.querySelector('.social__comment-total-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCommentsItem = bigPicture.querySelector('.social__comment');
const closeBigPictureButton = document.querySelector('.big-picture__cancel');

// Создание комментариев
const createComments = ({ avatar, name, message }) => {
  const newComment = socialCommentsItem.cloneNode(true);
  const userAvatar = newComment.querySelector('.social__picture');
  const userText = newComment.querySelector('.social__text');

  userAvatar.src = avatar;
  userAvatar.alt = name;
  userText.textContent = message;

  return newComment;
};

// Добавление всех комментариев к большому фото
const showComments = (previews) => {
  const commentsFragment = document.createDocumentFragment();
  previews.forEach((comment) => {
    const commentItem = createComments(comment);
    commentsFragment.appendChild(commentItem);
  });
  socialComments.appendChild(commentsFragment);
};

// Отрисовка только 5ти комментариев к большому фото
let totalCommentsCount;
let shownCommentCount = 0;

const showPortionComments = () => {
  if (totalCommentsCount.length > COMMENTS_VISIBLE) {
    shownCommentCount += COMMENTS_VISIBLE;
    shownCommentsCounter.textContent = totalCommentsCount.length;
    showComments(totalCommentsCount.splice(COMMENTS_MIN, COMMENTS_VISIBLE));
    commentsLoader.classList.remove('hidden');
  } else {
    shownCommentCount += totalCommentsCount.length;
    showComments(totalCommentsCount);
    commentsLoader.classList.add('hidden');
  }
  shownCommentsCounter.textContent = shownCommentCount;
};

// Загрузка комментариев по кнопке
commentsLoader.addEventListener('click', showPortionComments);

// Отрисовка большого фото

const paintBigPhoto = (previews) => {
  bigPicture.querySelector('.big-picture__img').dataset.id = previews.id;
  bigPicture.querySelector('.big-picture__img img').src = previews.url;
  bigPicture.querySelector('.big-picture__img img').alt = previews.description;
  bigPicture.querySelector('.likes-count').textContent = previews.likes;
  bigPicture.querySelector('.social__caption').textContent = previews.description;
};

// Закрытие по escape

const onBigPhotoEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

// Открытие большого фото

const openBigPhoto = (previews) => {
  bigPicture.classList.remove('hidden');
  document.addEventListener('keydown', onBigPhotoEscKeydown);
  body.classList.add('modal-open');
  closeBigPictureButton.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  });
  socialComments.innerHTML = '';
  const comments = previews.comments;
  totalCommentsCounter.textContent = comments.length;

  totalCommentsCount = [...previews.comments];

  showPortionComments();
  paintBigPhoto(previews);
};

// Закрытие большого фото

const closeBigPhoto = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onBigPhotoEscKeydown);
};

export { showComments, openBigPhoto, closeBigPhoto };
