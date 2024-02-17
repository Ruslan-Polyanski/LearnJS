// Учитывает ли функция последние изменения?
// Функция sayHi использует имя внешней переменной. 
// Какое значение будет использоваться при выполнении функции?
// Такие ситуации встречаются как при разработке для браузера, так и для сервера. 
// Функция может быть назначена на выполнение позже, 
// чем она была создана, например, после действия пользователя или сетевого запроса.
// Итак, вопрос: учитывает ли она последние изменения?

() => {

  let name = "John";

  function sayHi() {
    alert("Hi, " + name);
  }
  
  name = "Pete";
  
  sayHi(); // "Pete"

}



// Какие переменные доступны?
// Приведенная ниже функция makeWorker создает другую функцию и возвращает ее. 
// Эта новая функция может быть вызвана из другого места.
// Будет ли она иметь доступ к внешним переменным из места своего создания, 
// или из места вызова, или из обоих мест?

() => {

  function makeWorker() {
    let name = "Pete";
  
    return function() {
      alert(name);
    };
  }
  
  let name = "John";
  
  let work = makeWorker();
  
  work(); // "Pete"

}



// Независимы ли счётчики?
// Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.
// Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?

() => {

  function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();
  
  alert( counter() ); // 0
  alert( counter() ); // 1
  
  alert( counter2() ); // 0
  alert( counter2() ); // 1

}



// Здесь объект счётчика создан с помощью функции-конструктора.
// Будет ли он работать? Что покажет?

() => {

  function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
  }
  
  let counter = new Counter();
  
  alert( counter.up() ); // 1
  alert( counter.up() ); // 2
  alert( counter.down() ); // 1

}









