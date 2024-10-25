// Функция проверки длины строки

function compareLengthOfStrings(stringText, stringLength) {
  return stringText.length <= stringLength;
}
compareLengthOfStrings('Проверяющая строка для теста функции', 50);

// Функция проверки на палиндромность

function checkIdentical(string) {
  let stringTest = '';
  const stringNormalize = string.replaceAll(' ', '').toLowerCase();

  for (let i = stringNormalize.length - 1; i >= 0; i--) {
    stringTest += stringNormalize[i];
  }

  return stringNormalize === stringTest;
}

checkIdentical('Лёша на полке клопа нашёл ');

// Функция извлечения чисел из строк

function extractTheNumbers(stringToNumber) {
  stringToNumber.toString();
  let stringResult = '';
  for (let i = 0; i <= stringToNumber.length - 1; i++) {
    if (!Number.isNaN(parseInt(stringToNumber[i], 10))) {
      stringResult += stringToNumber[i];
    }
  }
  return parseInt(stringResult, 10);
}
extractTheNumbers('2024 год очень знаменателен, в отличие от 2023го');
