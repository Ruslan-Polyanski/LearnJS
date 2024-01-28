// Фильтрация уникальных элементов массива
// Допустим, у нас есть массив arr.
// Создайте функцию unique(arr), которая вернёт массив уникальных, 
// не повторяющихся значений массива arr.

function unique(arr) {
  const set = new Set(arr);
  const newArr = [];
  set.forEach(value => newArr.push(value));
  return newArr;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare,Krishna,:-O



// Отфильтруйте анаграммы
// Анаграммы – это слова, у которых те же буквы в том же количестве,
// но они располагаются в другом порядке.
// nap - pan
// ear - are - era
// cheaters - hectares - teachers

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  const newArr = arr.map(value => [value.toLowerCase().split('').sort().join(''), value])

  // const newObj = Object.fromEntries(newArr)
  // return Object.values(newObj)

  const map = new Map(newArr);
  return Array.from(map.values())
}

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"


// Перебираемые ключи
// Мы хотели бы получить массив ключей map.keys() в переменную и далее 
// работать с ними, например, применить метод .push.

const map = new Map();

map.set("name", "John");

const keys = Array.from(map.keys());

keys.push("more");