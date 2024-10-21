// Функция проверки длины строки

const stringName = 'Проверяющая строка для теста функции';

function getLengthString (stringName, stringLength) {
  if (stringLength > 10 & stringLength <= 50) {
    return true;
  }
    return false;
}

console.log(getLengthString(stringName, stringName.length))

// Функция проверки на палиндромность
let stringTest = '';
let result = '';

function getStringSame (string) {
  const stringNoSpaces = string.replaceAll(' ', '');
  const stringNormalize = stringNoSpaces.toLowerCase();


  // Не смогла добиться результата этим способом
  //   for (let i = stringNormalize.length - 1; i > stringNormalize[0]; i--) {
  //     stringTest += stringNormalize[i];
  //   }

  stringTest = stringNormalize.split("").reverse().join("");

  if (stringNormalize === stringTest) {
    result = true;
  } else {result = false}

  return result;
}

console.log(getStringSame('Лёша на полке клопа нашёл '));

// Попытка создания функция извлечения чисел из строк
let stringResult = '';
let stringParse = '';

function getNumbers (stringToNumber) {
    stringToNumber.toString();
  for (let i = 0; i <= stringToNumber.length - 1; i++) {
      if (stringToNumber[i].isNaN) {
          continue
      } else {
          stringParse += stringToNumber[i];
          stringResult = parseInt(stringParse, 10);
      }
  }
  return stringResult;
}
console.log(getNumber('2024 год очень знаменателен, в отличие от 2023го'));
