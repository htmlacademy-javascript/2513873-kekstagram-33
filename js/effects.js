//import { imagePreview } from './slider';

const MIN_SLIDER_RANGE = 1;
const MAX_SLIDER_RANGE = 100;

// const DEFAULT_EFFECT = {
//   name: 'none',
//   filter: 'none',
//   min: 0,
//   max: 100,
//   step: 1,
//   unit: '',
// };

// const EFFECTS_DATA = [
//   {
//     name: 'chrome',
//     filter: 'grayscale',
//     min: 0,
//     max: 1,
//     step: 0.1,
//     unit: '',
//   },

//   {
//     name: 'sepia',
//     filter: 'sepia',
//     min: 0,
//     max: 1,
//     step: 0.1,
//     unit: '',
//   },

//   {
//     name: 'marvin',
//     filter: 'invert',
//     min: 0,
//     max: 100,
//     step: 1,
//     unit: '%',
//   },

//   {
//     name: 'phobos',
//     filter: 'blur',
//     min: 0,
//     max: 3,
//     step: 0.1,
//     unit: 'px',
//   },

//   {
//     name: 'heat',
//     filter: 'brightness',
//     min: 1,
//     max: 3,
//     step: 0.1,
//     unit: '',
//   },

//   DEFAULT_EFFECT,
// ];

const effectsLevelContainer = document.querySelector('.img-upload__effect-level');
const effectsLevelSlider = effectsLevelContainer.querySelector('.effect-level__slider');
//const effectsLevelValue = document.querySelector('.effect-level__value');
//const effectsContainer = document.querySelector('.img-upload__effects');
//let currentEffect = DEFAULT_EFFECT;

noUiSlider.create(effectsLevelSlider, {
  range: {
    min: MIN_SLIDER_RANGE,
    max: MAX_SLIDER_RANGE,
  },
  start: MAX_SLIDER_RANGE,
  step: MIN_SLIDER_RANGE,
  connect: 'lower',
});
