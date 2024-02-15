function sum(a, b) {
  return a + b;
}

alert( sum(1, 2, 3, 4, 5) );



function sumAll(...args) {
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

alert( sumAll(1) ); // 1
alert( sumAll(1, 2) ); // 3
alert( sumAll(1, 2, 3) ); // 6



function showName(firstName, lastName, ...titles) {
  alert( firstName + ' ' + lastName ); // Юлий Цезарь

  // Оставшиеся параметры пойдут в массив
  // titles = ["Консул", "Император"]
  alert( titles[0] ); // Консул
  alert( titles[1] ); // Император
  alert( titles.length ); // 2
}

showName("Юлий", "Цезарь", "Консул", "Император");


function f(arg1, ...rest, arg2) { // arg2 после ...rest ?!
  // Ошибка
}
// ...rest должен всегда быть последним.


function showName() {
  alert( arguments.length );
  alert( arguments[0] );
  alert( arguments[1] );

  // Объект arguments можно перебирать
  // for (let arg of arguments) alert(arg);
}

// Вывод: 2, Юлий, Цезарь
showName("Юлий", "Цезарь");

// Вывод: 1, Илья, undefined (второго аргумента нет)
showName("Илья");


function f() {
  let showArg = () => console.log(arguments[0]);
  showArg(2);
}

f(1, 2, 3, 4); // [1, 2, 3, 4]

// Как мы помним, у стрелочных функций нет собственного this. 
// Теперь мы знаем, что нет и своего объекта arguments.


let arr3 = [1, -2, 3, 4];
let arr4 = [8, 3, -8, 1];

alert( Math.max(...arr3, ...arr4) ); // 8


let arr5 = [1, -2, 3, 4];
let arr6 = [8, 3, -8, 1];

alert( Math.max(1, ...arr5, 2, ...arr6, 25) ); // 25


let arr = [3, 5, 1];
let arr2 = [8, 9, 15];

let merged = [0, ...arr, 2, ...arr2];

alert(merged); // 0,3,5,1,2,8,9,15 (0, затем arr, затем 2, в конце arr2)

let str2 = "Привет";

alert( [...str2] ); // П,р,и,в,е,т


let str3 = "Привет";

// Array.from преобразует перебираемый объект в массив
alert( Array.from(str3) ); // П,р,и,в,е,т


// Но между Array.from(obj) и [...obj] есть разница:
// Array.from работает как с псевдомассивами, так и с итерируемыми объектами
// Оператор расширения работает только с итерируемыми объектами
// Выходит, что если нужно сделать из чего угодно массив, 
// то Array.from — более универсальный метод.


