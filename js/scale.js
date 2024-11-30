const SIZE_MIN = 25;
const SIZE_MAX = 100;
const SIZE_DEFAULT = 100;
const SIZE_STEP = 25;

const imagePreview = document.querySelector('.img-upload__preview img');
const sizeScale = document.querySelector('.img-upload__scale');
const sizeScaleControl = sizeScale.querySelector('.scale__control--value');
const smallerButton = sizeScale.querySelector('.scale__control--smaller');
const biggerButton = sizeScale.querySelector('.scale__control--bigger');
let currentSize = SIZE_DEFAULT;

const sizeImage = (value) => {
  imagePreview.style.transform = `scale(${value / 100})`;
  sizeScaleControl.value = `${value}%`;
};

const getNewSize = () => {
  smallerButton.addEventListener('click', () => {
    currentSize = parseInt(sizeScaleControl.value, 10);
    let newSize = currentSize - SIZE_STEP;
    if (newSize < SIZE_MIN) {
      newSize = SIZE_MIN;
    }
    sizeImage(newSize);
  });

  biggerButton.addEventListener('click', () => {
    currentSize = parseInt(sizeScaleControl.value, 10);
    let newSize = currentSize + SIZE_STEP;
    if (newSize > SIZE_MAX) {
      newSize = SIZE_MAX;
    }
    sizeImage(newSize);
  });
};

const sizeReset = () => sizeImage(SIZE_DEFAULT);

export { getNewSize, sizeReset };
