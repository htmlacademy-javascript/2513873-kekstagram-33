import { openEditingForm } from './form.js';
import { initImageScale } from './scale.js';
import { getData } from './network.js';
import { checkFormSubmit, closeEditingForm } from './form.js';

openEditingForm(initImageScale());
getData();
checkFormSubmit(closeEditingForm);
