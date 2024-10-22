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

// Функция извлечения чисел из строк

function getNumbers(stringToNumber) {
  stringToNumber.toString();
  let stringResult = '';
  for (let i = 0; i <= stringToNumber.length - 1; i++) {
    if (!Number.isNaN(parseInt(stringToNumber[i], 10))) {
    stringResult += stringToNumber[i]}
  }
  return parseInt(stringResult, 10);
}
getNumbers('2024 год очень знаменателен, в отличие от 2023го');
