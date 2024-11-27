import {makeSimilarPhotoSpecifications} from './data-create.js';
import { showFullscreenPhoto } from './gallery.js';
showFullscreenPhoto(makeSimilarPhotoSpecifications());

import { openEditingForm } from './form.js';
openEditingForm();

import { getNewSize } from './scale.js';
getNewSize();

import { callSlider } from './effects.js';
callSlider();
