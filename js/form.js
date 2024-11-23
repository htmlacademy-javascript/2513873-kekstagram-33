import { isEscapeKey } from './util.js';
import { body } from './big-picture-view.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadInput = uploadForm.querySelector('.img-upload__input');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const uploadCancelButton = uploadForm.querySelector('.img-upload__cancel');
const uploadHashtag = uploadForm.querySelector('.text__hashtags');
const uploadComment = uploadForm.querySelector('.text__description');
const uploadButton = uploadForm.querySelector('.img-upload__submit');

const HASHTAGS_MAXCOUNT = 5;
const COMMENT_MAXLENGTH = 140;
const VALID_HASHTAG_STRING = /^#[a-zа-яё0-9]{1,}$/i;
const HASHTAG_MAXLENGTH = 20;
const errorMessages = {
  INVALID_HASHTAG_STRING: 'Хэш-тег должен начинаться с #, состоять из букв и чисел без пробелов',
  COMMENT_MAXLENGTH_ERROR: `Максимальная длина комментария ${COMMENT_MAXLENGTH} символов`,
  COUNT_ERROR: `Нельзя указать больше ${HASHTAG_MAXLENGTH} хэш-тегов`,
  HASHTAG_MAXLENGTH_ERROR: `Максимальная длина хэш-тега ${HASHTAG_MAXLENGTH} символов`,
  UNIQUENESS_ERROR: 'Хэш-теги не должны повторяться',
};

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error-text'
});

// Проверка тэгов

const getHashtags = (value) => {
  const hashtags = value.trim().split(/\s+/);
  return hashtags;
};

const checkSymbols = (value) => {
  getHashtags(value).every((hashtag) => VALID_HASHTAG_STRING.test(hashtag));
};

const checkLength = (value) => {
  getHashtags(value).every((hashtag) => hashtag.length <= HASHTAG_MAXLENGTH);
};

const checkCount = (value) =>
  getHashtags(value).length <= HASHTAGS_MAXCOUNT;


const checkUniqueness = (value) => {
  const hashtags = getHashtags(value);
  const modifiedHashtags = hashtags.map((hashtag) => hashtag.toLowerCase());
  return modifiedHashtags.length === new Set(modifiedHashtags).size;
};

pristine.addValidator(uploadHashtag, checkSymbols, errorMessages.INVALID_HASHTAG_STRING);
pristine.addValidator(uploadHashtag, checkLength, errorMessages.LENGTH_ERROR);
pristine.addValidator(uploadHashtag, checkCount, errorMessages.COUNT_ERROR);
pristine.addValidator(uploadHashtag, checkUniqueness, errorMessages.UNIQUENESS_ERROR);

// Проверка комментариев

const checkComment = (value) =>
  value.length <= COMMENT_MAXLENGTH;

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
    body.classList.add('modal-open');
    uploadCancelButton.addEventListener('click', closeEditingForm);
  });
  /*if (!checkSymbols || !checkLength || !checkCount || !checkUniqueness || !checkComment) {
    uploadButton.classList.add('disabled');
  };
  if (!pristine) {
    uploadButton.classList.add('disabled');
  }*/
};

const submitForm = () => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      uploadForm.submit();
    }
  });
};

uploadButton.addEventListener('click', () => {
  submitForm();
});

// Закрытие формы
function closeEditingForm() {
  uploadForm.reset();
  pristine.reset();
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEditingFormEscKeydown);
}

export { openEditingForm };
