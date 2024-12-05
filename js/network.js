import { paintPreviews } from './paint-previews.js';
import { showFullscreenPhoto } from './gallery.js';
import { setFormSubmit, closeEditingForm } from './form.js';
import { showDataError } from './errors-and-success.js';

fetch('https://32.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json())
  .then((previews) => {
    paintPreviews(previews);
    showFullscreenPhoto(previews);
  })
  .catch(() => {
    showDataError();
  });

setFormSubmit(closeEditingForm);
