const photosContainer = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content;

// Создание миниатюр
const createPreview = (preview) => {
  const userPhotoContainer = templatePicture.cloneNode(true);
  userPhotoContainer.querySelector('.picture').dataset.id = preview.id;
  userPhotoContainer.querySelector('.picture__img').src = preview.url;
  userPhotoContainer.querySelector('.picture__img').alt = preview.description;
  userPhotoContainer.querySelector('.picture__comments').textContent = preview.comments.length;
  userPhotoContainer.querySelector('.picture__likes').textContent = preview.likes;

  return userPhotoContainer;
};

// Отрисовка миниатюр
const paintPreviews = (previews) => {
  let image = photosContainer.querySelector('.picture');
  while(image) {
    image.remove();
    image = photosContainer.querySelector('.picture');
  }
  const fragment = document.createDocumentFragment();
  previews.forEach((preview) => {
    const photo = createPreview(preview);
    fragment.appendChild(photo);
  });
  photosContainer.appendChild(fragment);
};

export { paintPreviews };

