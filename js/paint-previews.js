import {makeSimilarPhotoSpecifications} from './data-create.js';

const photosContainer = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content;
const crateUsersPhotos = makeSimilarPhotoSpecifications();

const fragment = document.createDocumentFragment();

crateUsersPhotos.forEach(({url, description, comments, likes}) => {
  const userPhotoContainer = templatePicture.cloneNode(true);
  userPhotoContainer.querySelector('.picture__img').src = url;
  userPhotoContainer.querySelector('.picture__img').alt = description;

  for (let i = 0; i < comments.length; i++) {
    const pictureCommentsBlock = userPhotoContainer.querySelector('.picture__comments');

    const pictureCommentData = document.createElement('p');
    pictureCommentData.id = comments[i].id;
    const commentAvatar = document.createElement('img');
    commentAvatar.src = comments[i].avatar;
    pictureCommentData.appendChild(commentAvatar);
    const commentText = document.createElement('span');
    commentText.textContent = comments[i].message;
    pictureCommentData.appendChild(commentText);
    const commentUserName = document.createElement('span');
    commentUserName.textContent = comments[i].name;
    pictureCommentData.appendChild(commentUserName);

    pictureCommentsBlock.appendChild(pictureCommentData);
  }

  userPhotoContainer.querySelector('.picture__likes').textContent = likes;

  fragment.appendChild(userPhotoContainer);
});

photosContainer.appendChild(fragment);
