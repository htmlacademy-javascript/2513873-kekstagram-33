import {makeSimilarPhotoSpecifications} from './data-create.js';
import { showFullscreenPhoto } from './gallery.js';
import { openEditingForm } from './form.js';
import { getNewSize } from './scale.js';

showFullscreenPhoto(makeSimilarPhotoSpecifications());
openEditingForm();
getNewSize();
