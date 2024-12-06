import { isEscapeKey, submitButtonAccess } from './util.js';
import { scaleReset } from './scale.js';
import { resetEffects, initSlider, resetSlider } from './effects.js';
import { showSendingError, showSendingSuccess } from './errors-and-success.js';
import { sendData } from './network.js';
import { uploadPhoto } from './upload-photo.js';

const HASHTAGS_MAXCOUNT = 5;
const COMMENT_MAXLENGTH = 140;
const VALID_HASHTAG_STRING = /^#[a-zа-яё0-9]{1,19}$/i;
const SUBMIT_BUTTON_DEFAULT_TEXT = 'ОПУБЛИКОВАТЬ';
const SUBMIT_BUTTON_SENDING_TEXT = 'ПУБЛИКУЮ...';
const errorMessages = {
  INVALID_HASHTAG_STRING: 'Хэш-тег должен начинаться с #, состоять из букв и чисел без пробелов, и быть не диннее 20 символов, включая #',
  COMMENT_MAXLENGTH_ERROR: `Максимальная длина комментария ${COMMENT_MAXLENGTH} символов`,
  COUNT_ERROR: `Нельзя указать больше ${HASHTAGS_MAXCOUNT} хэш-тегов`,
  UNIQUENESS_ERROR: 'Хэш-теги не должны повторяться',
};

const uploadForm = document.querySelector('.img-upload__form');
const uploadInput = uploadForm.querySelector('.img-upload__input');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const uploadCancelButton = uploadForm.querySelector('.img-upload__cancel');
const uploadHashtag = uploadForm.querySelector('.text__hashtags');
const uploadComment = uploadForm.querySelector('.text__description');
const submitButton = uploadForm.querySelector('.img-upload__submit');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error-text'
}, false);

// Проверка хэштэгов

const getHashtags = (value) => {
  const hashtags = value.trim().split(/\s+/).filter(Boolean);
  return hashtags;
};

const checkSymbols = (value) => getHashtags(value).every((hashtag) => VALID_HASHTAG_STRING.test(hashtag));

const checkCount = (value) => getHashtags(value).length <= HASHTAGS_MAXCOUNT;

const checkUniqueness = (value) => {
  const hashtags = getHashtags(value);
  const modifiedHashtags = hashtags.map((hashtag) => hashtag.toLowerCase());
  return modifiedHashtags.length === new Set(modifiedHashtags).size;
};

pristine.addValidator(uploadHashtag, checkSymbols, errorMessages.INVALID_HASHTAG_STRING);
pristine.addValidator(uploadHashtag, checkCount, errorMessages.COUNT_ERROR);
pristine.addValidator(uploadHashtag, checkUniqueness, errorMessages.UNIQUENESS_ERROR);

// Проверка комментариев
const checkComment = (value) => value.length <= COMMENT_MAXLENGTH;

pristine.addValidator(uploadComment, checkComment, errorMessages.COMMENT_MAXLENGTH_ERROR);

// Проверка, является ли текстовое поле активным
const isInputOnFocus = () =>
  document.activeElement === uploadHashtag || document.activeElement === uploadComment;

// Закрытие по esc
const onEditingFormEscKeydown = (evt) => {
  if (isEscapeKey(evt) && !isInputOnFocus()) {
    evt.preventDefault();
    closeEditingForm();
  }
};


// Открытие формы редактирования
const openEditingForm = () => {
  uploadInput.addEventListener('change', () => {
    uploadOverlay.classList.remove('hidden');
    document.addEventListener('keydown', onEditingFormEscKeydown);
    document.body.classList.add('modal-open');
    uploadCancelButton.addEventListener('click', closeEditingForm);
    initSlider();
    uploadPhoto();
  });
};

// Закрытие формы
function closeEditingForm () {
  uploadForm.reset();
  pristine.reset();
  scaleReset();
  resetEffects();
  resetSlider();
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEditingFormEscKeydown);
  submitButtonAccess(submitButton, false, SUBMIT_BUTTON_DEFAULT_TEXT);
}

// Убираем текст ошибок pristine при очистке полей ввода
const cleanPristineErrors = () => {
  uploadHashtag.addEventListener('keydown', () => {
    if (uploadHashtag.value !== '' || uploadComment.value !== '') {
      pristine.reset();
    }
  });
};

// Функция отправки формы
const sendFormSubmit = (data) => {
  document.removeEventListener('keydown', onEditingFormEscKeydown);
  cleanPristineErrors();
  submitButtonAccess(submitButton, false, SUBMIT_BUTTON_SENDING_TEXT);
  sendData(new FormData(data))
    .then(() => {
      showSendingSuccess();
      closeEditingForm();
    })
    .catch(() => {
      showSendingError();
    })
    .finally(submitButtonAccess(submitButton, true, SUBMIT_BUTTON_SENDING_TEXT));
};

// Проверка формы перед отправкой на сервер
const checkFormSubmit = () => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (pristine.validate()) {
      sendFormSubmit(evt.target);
    }
  });
};

export { onEditingFormEscKeydown, openEditingForm, checkFormSubmit, closeEditingForm, submitButton, SUBMIT_BUTTON_DEFAULT_TEXT };
