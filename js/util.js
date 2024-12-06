// Получаем случайные целые числа из диапазона
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// фукция выбора случайного элемента из массива
const getRandomElement = (elements) => elements[getRandomInteger(elements.length - 1, 0)];

// Функция генерации идентификаторов
const createIdGenerator = () => {
  let currentId = 0;
  return () => ++currentId;
};

// KeyCode клавиши escape
const isEscapeKey = (evt) => evt.key === 'Escape';

// Функция закрытия сообщений
const closeMessage = (button, onClick, onEsc, onMouseClick, container) => {
  button.removeEventListener('click', onClick);
  document.removeEventListener('keydown', onEsc);
  document.removeEventListener('click', onMouseClick);
  container.remove();
};

// Функция показа сообщений
const showMessage = (container, button, onClick, onEsc, onMouseClick) => {
  document.body.append(container);
  button.addEventListener('click', onClick);
  document.addEventListener('keydown', onEsc);
  document.addEventListener('click', onMouseClick);
};

// Функция блокировки/разблокировки кнопки
const submitButtonAccess = (button, condition, value) => {
  button.disabled = condition;
  button.textContent = value;
};

export {getRandomInteger, getRandomElement, createIdGenerator, isEscapeKey, closeMessage, showMessage,
  submitButtonAccess };
