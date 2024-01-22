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



// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr
// и удаляет из него все значения кроме тех, которые находятся между a и b. 
// То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.

let arr1 = [5, 3, 8, 1];

function filterRangeInPlace(arr1, a, b) {
  const newArr = arr1.filter(value => {
    if(a <= value && value <= b) {
      return true;
    } else {
      return false;
    }
  })
  console.log(newArr)
  arr1.splice(0, arr1.length, ...newArr)
}

filterRangeInPlace(arr1, 1, 4); // удалены числа вне диапазона 1..4

alert( arr1 ); // [3, 1]



// Сортировать в порядке по убыванию

let arr2 = [5, 2, 1, -10, 8];

arr2.sort((a, b) => {
  return b - a;
})

alert( arr2 ); // 8, 5, 2, 1, -10



// Скопировать и отсортировать массив
// У нас есть массив строк arr. Нужно получить отсортированную копию, 
// но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr3 = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  return arr.slice().sort((a, b) => a > b ? 1 : -1)
}

let sorted = copySorted(arr3);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr3 ); // HTML, JavaScript, CSS (без изменений)



// Создать расширяемый калькулятор

function Calculator() {
  this.operation = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };

  this.calculate = function(str) {
    const newArr = str.split(' ');
    const znak = newArr[1];
    const a = +newArr.at(0);
    const b = +newArr.at(-1);
    const result = this.operation[znak](a, b);
    return result;
  };

  this.addMethod = function(name, func) {
    this.operation[name] = func;
  }
}

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
