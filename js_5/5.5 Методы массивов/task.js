
// Напишите функцию camelize(str), которая преобразует строки 
// вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

function camelize(str) {
  const arrLetter = str.split('');
  console.log(arrLetter)
  const result = [];
  let flag = false;

  arrLetter.forEach((value) => {
    if(flag === true && value !== '-') {
      result.push(value.toUpperCase())
      flag = false;
    } else if(flag === false && value === '-') {
      flag = true;
    } else {
      result.push(value)
    }
  })

  return result.join('');
}

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition-") == 'WebkitTransition';


// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, 
// ищет элементы со значениями больше или равными a и меньше или равными b 
// и возвращает результат в виде массива.
// Функция должна возвращать новый массив и не изменять исходный.

let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  return arr.filter(value => value >= a && value <= b)
}

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)
alert( arr ); // 5,3,8,1 (без изменений)

