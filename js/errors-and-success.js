import { isEscapeKey } from './util.js';

const ERROR_SHOW_TIME = 5000;

const templateError = document.querySelector('#error').content;
const errorContainer = templateError.cloneNode(true);
const errorButton = errorContainer.querySelector('.error__button');
// const tempaleSuccess = document.querySelector('#success').content;
// const successContainer = tempaleSuccess.cloneNode(true);
// const successButton = successContainer.querySelector('.success__button');

// const onSuccessButtonClick = () => {
//   document.body.removeChild(successContainer);
// };

// const closeSendingSuccess = () => {
//   successButton.addEventListener('click', onSuccessButtonClick)
// };

// const onSuccessContainerEscKeydown = (evt) => {
//   if (isEscapeKey(evt)) {
//     evt.preventDefault();
//     closeSendingSuccess();
//   }
// };

// const showSendingSuccess = () => {
//   document.body.appendChild(successContainer);
//   document.addEventListener('keydown', onSuccessContainerEscKeydown);
// };

// НЕРАБОЧАЯ ЗАГОТОВКА
const onErrorButtonClick = () => {
  //errorContainer.remove();
  errorContainer.classList.add('hidden');
};

const closeSendingError = () => {
  errorButton.addEventListener('.click', onErrorButtonClick);
};

const onErrorContainerEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSendingError();
  }
};

const showSendingError = () => {
  //const fragment = document.createDocumentFragment();
  //fragment.appendChild(errorContainer);

  document.body.append(errorContainer);

  document.addEventListener('keydown', onErrorContainerEscKeydown);

  setTimeout(() => {
    document.body.remove(errorContainer);
  }, ERROR_SHOW_TIME);
};

export { showSendingError };
