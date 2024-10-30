// Основные числовые данные
const PHOTOS_MIN = 1;
const PHOTOS_MAX = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_MIN = 0;
const COMMENTS_MAX = 30;
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;

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

const COMMENTS_LIST = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// фукция генерации случайного числа
const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// создание уникального идентификатора ID
const getSequentNumber = () => {
  let lastNumber = 0;
  return function () {
    lastNumber++;
    return lastNumber;
  };
};

// фукция выбора случайного элемента из массива
const getRandomElement = (elements) => elements[getRandomNumber(elements.length - 1, 0)];

const getCommentId = getSequentNumber();

const createUsersComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${ getRandomNumber(AVATAR_MIN, AVATAR_MAX) }.svg`,
  message: getRandomElement(COMMENTS_LIST),
  name: getRandomElement(USER_NAMES),
});

//функция, которая возвращает массив комментариев
const createComments = () => {
  const commentsAmount = getRandomNumber(COMMENTS_MIN, COMMENTS_MAX);
  return Array.from({ length: commentsAmount }, createUsersComment);
};

const getPhotoId = getSequentNumber(PHOTOS_MIN, PHOTOS_MAX);
const getPhotoNumber = getSequentNumber(PHOTOS_MIN, PHOTOS_MAX);

const photoSpecification = () => ({
  id: getPhotoId(),
  url: `photos/${ getPhotoNumber() }.jpg`,
  description: 'Авторское фото нашего прекрасного пользователя',
  likes: getRandomNumber(LIKES_MIN, LIKES_MAX),
  comments: createComments(),
});

const similarPhotoSpecifications = () => Array.from({ length: 25 }, photoSpecification);
similarPhotoSpecifications();
