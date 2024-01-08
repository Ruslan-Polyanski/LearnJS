
// Определите тип CustomType, который может принимать следующие значения
// null
// undefined
// числа

type CustomType = null | undefined | number;


// Реализуйте функцию lastIndex(str, char), которая возвращает индекс 
// последнего вхождения символа в строку или null, если такого символа нет.

function lastIndex(str: string, char: string): (number | null) {
  const result = str.lastIndexOf(char);
  
  return result >= 0 ? result : null; 
}

const str = 'test';
lastIndex(str, 't'); // 3
lastIndex(str, 'p'); // null