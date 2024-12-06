import { openEditingForm } from './form.js';
import { initImageScale } from './scale.js';
import { getData } from './network.js';
import { setFormSubmit, closeEditingForm } from './form.js';

openEditingForm(initImageScale());
getData();
//sendData();
setFormSubmit(closeEditingForm);
