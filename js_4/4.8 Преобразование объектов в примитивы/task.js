// вывод
alert(obj);

// используем объект в качестве ключа
anotherObj[obj] = 123;

// явное преобразование
let num = Number(obj);

// математические (не считая бинарного плюса)
let n = +obj; // унарный плюс
let delta = date1 - date2;

// сравнения больше/меньше
let greater = user1 > user2;

let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

// демонстрация результатов преобразований:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500

let user1 = {name: "John"};

alert(user1); // [object Object]
alert(user1.valueOf() === user1); // true

// Преобразование объекта в примитив вызывается автоматически многими встроенными функциями и операторами, которые ожидают примитив в качестве значения.

// Существует всего 3 типа (хинта) для этого:

// "string" (для alert и других операций, которым нужна строка)
// "number" (для математических операций)
// "default" (для некоторых других операторов, обычно объекты реализуют его как "number")
// Спецификация явно описывает для каждого оператора, какой ему следует использовать хинт.

// Алгоритм преобразования таков:

// Сначала вызывается метод obj[Symbol.toPrimitive](hint), если он существует,
// В случае, если хинт равен "string"
// происходит попытка вызвать obj.toString() и obj.valueOf(), смотря что есть.
// В случае, если хинт равен "number" или "default"
// происходит попытка вызвать obj.valueOf() и obj.toString(), смотря что есть.
// Все эти методы должны возвращать примитив (если определены).

// На практике часто бывает достаточно реализовать только obj.toString() в качестве универсального метода для преобразований к строке, который должен возвращать удобочитаемое представление объекта для целей логирования или отладки.





