const userNames = [
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

const commentsList = [
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createRandomId(a, b) {
  const previousValues = [];
  return function () {
    let currentValue = getRandomInteger(a, b);
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(a, b);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const createUsersComment = () => {
  const randomNameIndex = getRandomInteger(0, userNames.length - 1);
  const randomMessageIndex = getRandomInteger(0, commentsList.length - 1);
  const getRandomeMessage = createRandomId(1, 100);
  const getRandomeAvatar = createRandomId(1, 6);

  return {
    id: getRandomeMessage(),
    avatar: `img/avatar-${ getRandomeAvatar() }.svg`,
    message: commentsList[randomMessageIndex],
    name: userNames[randomNameIndex],
  };
};

const photoSpecification = () => {
  const comments = Array.from({ length: getRandomInteger(0, 30) }, () => (createUsersComment()));
  const getRandomePhotoId = createRandomId(1, 25);
  const getLikesQuantity = createRandomId(15, 200);

  return {
    id: getRandomePhotoId(),
    url: `photos-${ getRandomePhotoId() }.jpg`,
    description: 'Авторское фото нашего прекрасного пользователя',
    likes: getLikesQuantity(),
    comments,
  };
};
const similarPhotoSpecifications = () => Array.from({length: 25}, photoSpecification);
console.log(similarPhotoSpecifications());
