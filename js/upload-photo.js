const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const uploadInput = document.querySelector('.img-upload__input');
const imagePreview = document.querySelector('.img-upload__preview img');
const effectPreviews = document.querySelectorAll('.effects__preview');

const uploadPhoto = () => {
  const file = uploadInput.files[0];
  const fileName = file.name.toLowerCase();
  const typeFileMatching = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (typeFileMatching) {
    const photoURL = URL.createObjectURL(file);
    imagePreview.src = photoURL;
    effectPreviews.forEach((preview) => {
      preview.style.backgroundImage = `url(${photoURL})`;
    });
  }
};

export { uploadPhoto };
