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



// Функция внутри if
// Посмотрите на код. Какой будет результат у вызова на последней строке?

() => {

  let phrase = "Hello";

  if (true) {
    let user = "John";
  
    function sayHi() {
      alert(`${phrase}, ${user}`);
    }
  }
  
  sayHi(); // Это решение дает неоднозначный результат с "use strict"

}



// Сумма с помощью замыканий
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
// Да, именно таким образом, используя двойные круглые скобки (не опечатка).

() => {

  function sum(num) {
    let result = 0; // num = 1;
    
    return function(numb) {
      result += num;
      
      return result += numb;
    }
  }
  
  sum(1)(2) // 3
  sum(5)(-1) // 4



  function sum1(a) {

    return function(b) {
      return a + b;
    }

  }
  
  sum1(1)(2) // 3
  sum1(5)(-1) // 4

}



// Что выведет данный код?
// P.S. В этой задаче есть подвох. Решение не очевидно.

() => {

  let x = 1;

  function func() {
    console.log(x); // Ошибка
  
    let x = 2;
  }
  
  func();

}



// Фильтрация с помощью функции
// У нас есть встроенный метод arr.filter(f) для массивов. 
// Он фильтрует все элементы с помощью функции f. 
// Если она возвращает true, то элемент добавится в возвращаемый массив.
// Сделайте набор «готовых к употреблению» фильтров:
// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
// Они должны использоваться таким образом:
// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива

() => {

  function inBetween(one, two) {
      return function(item) {
        return one <= item && item <= two ? true : false;
      }
  }
 
    function inArray(arr) {
        return function(item) {
          return arr.includes(item);
        }
    }
    
    let arr = [1, 2, 3, 4, 5, 6, 7];
    
    alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
    
    alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

}



// Сортировать по полю

() => {

  let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

  // users.sort((a, b) => a.name > b.name ? 1 : -1);
  // users.sort((a, b) => a.age > b.age ? 1 : -1);

  function byField(property) {
    return function(a, b) {
      return a[property] > b[property] ? 1 : -1;
    }
  }

  users.sort(byField('name'));
  users.sort(byField('age'));

}


// Армия функций
// Следующий код создаёт массив из стрелков (shooters).
// Каждая функция предназначена выводить их порядковые номера.
// Почему у всех стрелков одинаковые номера?
// Почините код, чтобы он работал как задумано.

() => {

    function makeArmy() {
      let shooters = [];
    
      for(let i = 0; i < 10; i++) {
        let shooter = function() { // функция shooter
          alert( i ); // должна выводить порядковый номер
        };
        shooters.push(shooter); // и добавлять стрелка в массив
      }
    
      // ...а в конце вернуть массив из всех стрелков
      return shooters;
    }
    
    let army = makeArmy();
    
    // все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
    army[0](); // 10 от стрелка с порядковым номером 0
    army[1](); // 10 от стрелка с порядковым номером 1
    army[2](); // 10 ...и т.д.

}




















