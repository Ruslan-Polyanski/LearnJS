
// Реализуйте функцию last(), которая извлекает последний элемент 
// из переданного значения. Значением может быть строка или число. 
// Функция возвращает значение того же типа, которое было передано 
// в качестве параметра:

function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !Number.isNaN(value);
}

function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function last(value: unknown) {
  if(isNumber(value)) {
    const arr = value.toString().split('');
    const result = +arr[arr.length - 1];
    return result;
  }

  if(isString(value)) {
    if(!value) {
      return value;
    }

    const arr = value.split('');
    const result = arr[arr.length - 1];

    return result;
  }
}


// Передаем в качестве параметра строку
// Функция возвращает строку
last('hexlet'); // t

// Передаем в качестве параметра число
// Функция возвращает число
last(12345); // 5