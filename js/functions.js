// Функция проверки длины строки

function getLengthString(stringText, stringLength) {
  return stringText.length <= stringLength;
}
getLengthString('Проверяющая строка для теста функции', 50);

// Функция проверки на палиндромность

function getStringSame(string) {
  let stringTest = '';
  const stringNormalize = string.replaceAll(' ', '').toLowerCase();

  for (let i = stringNormalize.length - 1; i >= 0; i--) {
    stringTest += stringNormalize[i];
  }

  return stringNormalize === stringTest;
}

getStringSame('Лёша на полке клопа нашёл ');

// Попытка создания функция извлечения чисел из строк
let stringResult = '';
let stringParse = '';

function getNumbers(stringToNumber) {
  stringToNumber.toString();
  for (let i = 0; i <= stringToNumber.length - 1; i++) {
    if (stringToNumber[i].isNaN) {
      continue;
    } else {
      stringParse += stringToNumber[i];
      stringResult = parseInt(stringParse, 10);
    }
  }
  return stringResult;
}
getNumbers('2024 год очень знаменателен, в отличие от 2023го');
