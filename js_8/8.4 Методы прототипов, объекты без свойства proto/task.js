
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
