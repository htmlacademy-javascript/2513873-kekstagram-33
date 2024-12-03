//import {makeSimilarPhotoSpecifications} from './data-create.js';
import './network.js';
import './errors-and-success.js';
import { openEditingForm } from './form.js';
import { initImageScale } from './scale.js';

//showFullscreenPhoto(makeSimilarPhotoSpecifications());
openEditingForm(initImageScale());
