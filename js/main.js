// Основные числовые данные
const LIKES_QUANTITY = {
  likesMin: 15,
  likesMax: 200,
};

const COMMENTS_QUANTITY = {
  commentsMin: 0,
  commentcMax: 30,
};

const AVATARS_QUANTITY = {
  avatarMin: 1,
  avatarMax: 6,
};

const FINAL_ARRAY_LENGTH = 25;

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
  const CommentId = index + (FINAL_ARRAY_LENGTH + 1);
  return {
    id: CommentId,
    avatar: `img/avatar-${ getRandomInteger(AVATARS_QUANTITY.avatarMin, AVATARS_QUANTITY.avatarMax) }.svg`,
    message: getRandomElement(COMMENTS_LIST),
    name: getRandomElement(USER_NAMES),
  };
};

const photoSpecification = (_value, index) => {
  const comments = Array.from({ length: getRandomInteger(COMMENTS_QUANTITY.commentsMin, COMMENTS_QUANTITY.commentcMax) }, createUsersComment);
  const photoId = index + 1;
  return {
    id: photoId,
    url: `photos${ photoId }.jpg`,
    description: 'Авторское фото нашего прекрасного пользователя',
    likes: getRandomInteger(LIKES_QUANTITY.likesMin, LIKES_QUANTITY.likesMax),
    comments,
  };
};

const similarPhotoSpecifications = () => Array.from({ length: FINAL_ARRAY_LENGTH }, photoSpecification);
similarPhotoSpecifications();
