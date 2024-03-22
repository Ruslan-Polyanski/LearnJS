
() => {

  // Добавьте toString в словарь
  // Имеется объект dictionary, созданный с помощью Object.create(null) для хранения любых 
  // пар ключ/значение.
  // Добавьте ему метод dictionary.toString(), который должен возвращать список ключей, 
  // разделённых запятой. 
  // Ваш toString не должен выводиться при итерации объекта с помощью цикла for..in.
  
  const dictionary = Object.create(null);

  Object.defineProperty(dictionary, 'toString', {
    value: function() {
      return Object.keys(this).join(', ')
    },
    writable: false,
    enumerable: false,
    configurable: false,
  })
  
  dictionary.apple = "Apple";
  dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ
  
  for(let key in dictionary) {
    alert(key); // "apple", затем "__proto__"
  }
  
  alert(dictionary); // "apple,__proto__"

}



() => {

  // Разница между вызовами
  
  function Rabbit(name) {
    this.name = name;
  }

  Rabbit.prototype.sayHi = function() {
    console.log(this.name);
  };
  
  const rabbit = new Rabbit("Rabbit");

  // Все эти вызовы делают одно и тоже или нет?

  rabbit.sayHi(); // Вызовет метод sayHi через прототип, который покажет "Rabbit"
  Rabbit.prototype.sayHi(); // undefined
  Object.getPrototypeOf(rabbit).sayHi(); // undefined
  rabbit.__proto__.sayHi(); // undefined

}



() => {

  const prototype = { aboba: 123 };
  const obj = Object.create(prototype);

  console.log(obj.hasOwnProperty('aboba')); // false
  console.log(obj.aboba); // 123

  obj.aboba = 321;
  console.log(obj.hasOwnProperty('aboba')); // true
  console.log(obj.aboba); // 321

}



() => {

  function Aboba() {}

  console.log(Aboba.prototype.constructor === Aboba); // true

}



() => {

  const aboba = { name: 'aboba' };
  console.log(aboba.prototype); // undefined
  console.log(aboba.__proto__); // aboba.__proto__ === Object.prototype  ---> ture

  const numbers = [1, 2, 3];
  console.log(numbers.prototype); // undefined
  console.log(numbers.__proto__); // numbers.__proto__ === Array.prototype  ---> true

}
