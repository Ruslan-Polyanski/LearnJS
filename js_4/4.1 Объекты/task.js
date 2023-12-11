let user1 = new Object(); // синтаксис "конструктор объекта"
let user2 = {};  // синтаксис "литерал объекта"

let user3 = {     // объект
  name: "John",  // под ключом "name" хранится значение "John"
  age: 30        // под ключом "age" хранится значение 30
};
delete user3.age; // age удалено из объекта

let fruit = prompt("Какой фрукт купить?", "apple");
let bag = {
  [fruit]: 5, // имя свойства будет взято из переменной fruit
};
alert( bag.apple ); // 5, если fruit="apple"

function makeUser(name, age) {
  return {
    name, // то же самое, что и name: name
    age   // то же самое, что и age: age
    // ...
  };
}

// эти имена свойств допустимы
let obj = {
  for: 1,
  let: 2,
  return: 3
};

let user4 = {};
alert( user4.noSuchProperty === undefined ); // true означает "свойства нет"

let user = { name: "John", age: 30 };
"age" in user // true, user.age существует
"blabla" in user // false, user.blabla не существует

let user5 = { age: 30 };
let key = "age";
alert( key in user5 ); // true, имя свойства было взято из переменной key

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

const user6 = {};
user6.name = "John";
user6.surname = "Smith";
user6.name = "Pete";
delete user6.name;

// Напишите функцию isEmpty(obj), которая возвращает true, 
// если у объекта нет свойств, иначе false
const obj1 = {a: 1};
function isEmpty(obj) {
  for(let key in obj){
      return false;
  }
  return true;
}
isEmpty(obj1)


const user7 = {
  name: "John"
};
// это будет работать?
user7.name = "Pete"; // Да


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function sumSalaries(salaries) {
  let result = 0;

  for(let key in salaries){
    result += salaries[key];
  }

  return result;
}

const sum = sumSalaries(salaries);


function multiplyNumeric(menu) {
  for(let key in menu) {
    +menu[key] ? menu[key] = menu[key] * 2 : false;
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};