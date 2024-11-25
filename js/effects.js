import { imagePreview } from './slider.js';
import { sizeReset } from './slider.js';

const MIN_SLIDER_RANGE = 1;
const MAX_SLIDER_RANGE = 100;

const DEFAULT_EFFECT = {
  name: 'none',
  filter: 'none',
  min: 0,
  max: 100,
  step: 1,
  unit: '',
};

const EFFECTS_DATA = [
  {
    name: 'chrome',
    filter: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },

  {
    name: 'sepia',
    filter: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },

  {
    name: 'marvin',
    filter: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },

  {
    name: 'phobos',
    filter: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },

  {
    name: 'heat',
    filter: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },

  DEFAULT_EFFECT,
];

const effectsLevelContainer = document.querySelector('.img-upload__effect-level');
const effectsLevelSlider = document.querySelector('.effect-level__slider');
const effectsLevelValue = document.querySelector('.effect-level__value');
const effectsContainer = document.querySelector('.effects');
let currentEffect = DEFAULT_EFFECT;

noUiSlider.create(effectsLevelSlider, {
  range: {
    min: MIN_SLIDER_RANGE,
    max: MAX_SLIDER_RANGE,
  },
  start: MAX_SLIDER_RANGE,
  step: 1,
  connect: 'lower',
});

effectsLevelContainer.classList.add('hidden');

const isDefault = () => currentEffect === DEFAULT_EFFECT;

const changeSliderAbility = () => {
  if (isDefault()) {
    effectsLevelContainer.classList.add('hidden');
  } else {
    effectsLevelContainer.classList.remove('hidden');
  }
};

const changeSlider = () => {
  effectsLevelSlider.noUiSlider.updateOptions({
    range: {
      min: currentEffect.min,
      max: currentEffect.max,
    },
    step: currentEffect.step,
    start: currentEffect.max,
    connect: 'lower',
  });
  changeSliderAbility();
};

// Обработчик смены эффекта
const onEffectButtonChange = (evt) => {
  if (!evt.target.matches('input[type="radio"]')) {
    return;
  }
  currentEffect = EFFECTS_DATA.find(
    (effect) => effect.name === evt.target.value
  );
  imagePreview.className = `effects__preview--${currentEffect.name}`;
  changeSlider();
};

const onSliderUpdate = () => {
  if (isDefault()) {
    imagePreview.style.filter = 'none';
    sizeReset();
  }
  effectsLevelValue.value = effectsLevelSlider.noUiSlider.get();
  imagePreview.style.filter = `${currentEffect.filter}(${effectsLevelValue.value}${currentEffect.unit})`;
};

const resetEffects = () => {
  currentEffect = DEFAULT_EFFECT;
  changeSlider();
};

effectsContainer.addEventListener('change', onEffectButtonChange);
effectsLevelSlider.noUiSlider.on('update', onSliderUpdate);

export { resetEffects };
