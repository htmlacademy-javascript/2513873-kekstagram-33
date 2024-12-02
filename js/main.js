import {makeSimilarPhotoSpecifications} from './data-create.js';
import { showFullscreenPhoto } from './gallery.js';
import { openEditingForm } from './form.js';
import { initImageScale } from './scale.js';

showFullscreenPhoto(makeSimilarPhotoSpecifications());
openEditingForm(initImageScale());
