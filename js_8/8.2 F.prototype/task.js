
() => {

  // Изменяем "prototype"

  function Rabbit() {}

  Rabbit.prototype = {
    eats: true
  };
  
  const rabbit = new Rabbit();
  
  console.log( rabbit.eats ); // true

}



() => {

  function Rabbit() {}

  Rabbit.prototype = {
    eats: true
  };
  
  const rabbit = new Rabbit();

  Rabbit.prototype = {};
  
  console.log( rabbit.eats ); // true

}



() => {

  function Rabbit() {}

  Rabbit.prototype = {
    eats: true
  };
  
  const rabbit = new Rabbit();

  Rabbit.prototype.eats = false;
  
  console.log( rabbit.eats ); // false

}



() => {

  function Rabbit() {}

  Rabbit.prototype = {
    eats: true
  };
  
  const rabbit = new Rabbit();

  delete rabbit.eats;
  
  console.log( rabbit.eats ); // true

}



() => {

  function Rabbit() {}

  Rabbit.prototype = {
    eats: true
  };
  
  const rabbit = new Rabbit();

  delete Rabbit.prototype.eats;
  
  console.log( rabbit.eats ); // undefined

}



() => {

  // Представьте, что у нас имеется некий объект obj, 
  // созданный функцией-конструктором – мы не знаем какой именно, 
  // но хотелось бы создать ещё один объект такого же типа.
  // Можем ли мы сделать так?


  let obj2 = new obj.constructor(); // Да, можем, главное, 
  // чтобы в prototype функции конструктор при создании нашего
  // объекта лежал объект со свойством constructor


  // Приведите пример функции-конструктора для объекта obj, 
  // с которой такой вызов корректно сработает. 
  // И пример функции-конструктора, с которой такой код поведёт 
  // себя неправильно.

  function F() {} // тут сработает

  function F2() {}
  F2.prototype = {} // тут не сработает

}


