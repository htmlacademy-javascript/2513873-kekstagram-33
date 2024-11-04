import {getRandomInteger} from './util.js';
import {getRandomElement} from './util.js';
import {commentId} from './util.js';

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

const PHOTO_SPECIFICATIONS_LENGTH = 25;

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

// Функция создания комментариев
const createUsersComment = () => ({
  id: commentId(),
  avatar: `img/avatar-${getRandomInteger(AVATARS_QUANTITY.avatarMin, AVATARS_QUANTITY.avatarMax)}.svg`,
  message: getRandomElement(COMMENTS_LIST),
  name: getRandomElement(USER_NAMES),
});

const photoSpecification = (_value, index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: 'Авторское фото нашего прекрасного пользователя',
  likes: getRandomInteger(LIKES_QUANTITY.likesMin, LIKES_QUANTITY.likesMax),
  comments: Array.from({ length: getRandomInteger(COMMENTS_QUANTITY.commentsMin, COMMENTS_QUANTITY.commentcMax) }, createUsersComment),
});

const similarPhotoSpecifications = () => Array.from({ length: PHOTO_SPECIFICATIONS_LENGTH }, photoSpecification);

export {similarPhotoSpecifications};
