let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false

let id3 = Symbol("id");
alert(id3); // TypeError: Cannot convert a Symbol value to a string

let id4 = Symbol("id");
alert(id4.toString()); // Symbol(id), теперь работает

let id = Symbol("id");
alert(id.description); // id

let user = {
  name: "Вася"
};
let id5 = Symbol("id");
user[id5] = 1;
alert( user[id5] ); // мы можем получить доступ к данным по ключу-символу

const user = {
  name: 'Lera'
}

let id_6 = Symbol('id_6');
let id_7 = Symbol('id_7');

user[id_6] = 6;
user[id_7] = 7;

console.log(user)

console.log(user[id_6])
console.log(id_6.toString())
console.log(id_6.description)
console.log(user[id_7])
console.log(id_7.toString())
console.log(id_7.description)


let id_9 = Symbol("id");

let user = {
  name: "Вася",
  [id_9]: 123 // просто "id: 123" не сработает
};

// Свойства, чьи ключи – символы, не перебираются циклом for..in.

let id_10 = Symbol("id");
let user = {
  name: "Вася",
  age: 30,
  [id_10]: 123
};

for(let key in user) {
  console.log(user[key])
}

Object.keys(user) // также игнорирует символы.

// А вот Object.assign, в отличие от цикла for..in, копирует и строковые, и символьные свойства:

let id_11 = Symbol("id");
let user = {
  [id_11]: 123
};

let clone = Object.assign({}, user);

console.log( clone );

// глобальный реестр символов

let id_12 = Symbol.for("id_1"); // если символа не существует, он будет создан
let idAgain = Symbol.for("id_1");
console.log( id_12 === idAgain ); // true


// Для глобальных символов, кроме Symbol.for(key), 
// который ищет символ по имени, существует обратный метод: Symbol.keyFor(sym), 
// который, наоборот, принимает глобальный символ и возвращает его имя.

// получаем символ по имени
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// получаем имя по символу
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert( Symbol.keyFor(globalSymbol) ); // name, глобальный символ
alert( Symbol.keyFor(localSymbol) ); // undefined для неглобального символа

alert( localSymbol.description ); // name


Object.getOwnPropertySymbols() 
// возвращает массив всех символьных свойств, найденных непосредственно на переданном объекте.

let obj = {
  [Symbol('id_123')]: 123,
  name: `my`,
}


