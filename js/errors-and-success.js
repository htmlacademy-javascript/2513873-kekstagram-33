import { isEscapeKey, closeMessage, showMessage } from './util.js';

const ERROR_SHOW_TIME = 5000;

const templateError = document.querySelector('#error').content.querySelector('.error');
const errorContainer = templateError.cloneNode(true);
const errorButton = errorContainer.querySelector('.error__button');
const tempaleSuccess = document.querySelector('#success').content.querySelector('.success');
const successContainer = tempaleSuccess.cloneNode(true);
const successButton = successContainer.querySelector('.success__button');
const templateDataError = document.querySelector('#data-error').content.querySelector('.data-error');
const dataErrorContainer = templateDataError.cloneNode(true);

//Показ и закрытие сообщения об успешной отправке формы
const closeSendingSuccess = () => {
  closeMessage(successButton, onSuccessButtonClick, onSuccessContainerEscKeydown, onSuccessContainerMouseClick, successContainer);
};

function onSuccessButtonClick () {
  closeSendingSuccess();
}

function onSuccessContainerEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSendingSuccess();
  }
}

function onSuccessContainerMouseClick (evt) {
  if (!evt.target.matches('.success__inner')) {
    closeSendingSuccess();
  }
}

const showSendingSuccess = () => {
  showMessage(successContainer, successButton, onSuccessButtonClick, onSuccessContainerEscKeydown, onSuccessContainerMouseClick);
};

// Показ и закрытие ошибки об отправке файла
const closeSendingError = () => {
  closeMessage(errorButton, onErrorButtonClick, onErrorContainerEscKeydown, onErrorContainerMouseClick, errorContainer);
};

function onErrorButtonClick () {
  closeSendingError();
}

function onErrorContainerEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSendingError();
  }
}

function onErrorContainerMouseClick (evt) {
  if (!evt.target.matches('.error__inner')) {
    closeSendingError();
  }
}

const showSendingError = () => {
  showMessage(errorContainer, errorButton, onErrorButtonClick, onErrorContainerEscKeydown, onErrorContainerMouseClick);
  setTimeout(() => {
    errorContainer.remove();
  }, ERROR_SHOW_TIME);
};

// Показ и закрытие сообщения об ошибке загрузки данных
const showDataError = () => {
  document.body.append(dataErrorContainer);
  setTimeout(() => {
    dataErrorContainer.remove();
  }, ERROR_SHOW_TIME);
};

export { showSendingError, showSendingSuccess, showDataError };
