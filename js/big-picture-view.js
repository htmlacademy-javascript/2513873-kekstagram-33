/* const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img')
const likesCount = bigPicture.querySelector('.likes-count')
const commentsCount = bigPicture.querySelector('.social__comment-count');
const shownCommentsCount = bigPicture.querySelector('.social__comment-shown-count');
const totalCommentsCount = bigPicture.querySelector('.social__comment-total-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption')
const socialCommentsItem = bigPicture.querySelector('.social__comment');
const closeBigPictureButton = document.querySelector('.big-picture__cancel');

// Создание комментариев

const createComments = (previews) => {
  socialComments.innerHTML = '';

  previews.forEach((comment) => {
    const newComment = socialCommentsItem.cloneNode(true);
    const userAvatar = newComment.querySelector('.social__picture');
    const userText = newComment.querySelector('.social__text');

    userAvatar.src = comment.avatar;
    userAvatar.alt = comment.name;
    userText.textContent = comment.message;

    socialComments.appendChild(newComment);
  });
};

export {createComments} */

