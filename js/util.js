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

export {getRandomInteger, getRandomElement, createIdGenerator};
