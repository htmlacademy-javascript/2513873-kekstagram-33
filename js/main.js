// Основные числовые данные
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_MIN = 0;
const COMMENTS_MAX = 30;
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;

// Массив вариантов имён
const USER_NAMES = [
  'Полли',
  'Харитон',
  'Руслана',
  'Алёна',
  'Марья',
  'Руслан',
  'Святозар',
  'Добронрав',
  'Изольда',
  'Настасья',
  'Сидор',
  'Алексей',
  'Марк',
  'Лилиана'
];

// Массив вариантов комментариев
const COMMENTS_LIST = [
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// Получаем случайные целые числа из диапазона
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// фукция выбора случайного элемента из массива
const getRandomElement = (elements) => elements[getRandomInteger(elements.length - 1, 0)];

// Функция создания комментариев
const createUsersComment = (_value, index) => {
  const getId = index + 1;
  return {
    id: getId,
    avatar: `img/avatar-${ getRandomInteger(AVATAR_MIN, AVATAR_MAX) }.svg`,
    message: getRandomElement(COMMENTS_LIST),
    name: getRandomElement(USER_NAMES),
  };
};

const photoSpecification = (_value, index) => {
  const comments = Array.from({ length: getRandomInteger(COMMENTS_MIN, COMMENTS_MAX) }, createUsersComment);
  const getId = index + 1;
  return {
    id: getId,
    url: `photos${ getId }.jpg`,
    description: 'Авторское фото нашего прекрасного пользователя',
    likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
    comments,
  };
};

const similarPhotoSpecifications = () => Array.from({ length: 25 }, photoSpecification);
similarPhotoSpecifications();
