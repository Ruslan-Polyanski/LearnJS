
() => {

  // Почему instanceof возвращает true?

  function A() {}
  function B() {}

  A.prototype = B.prototype = {};

  let a = new A();

  console.log( a instanceof B ); // true

}