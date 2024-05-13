
() => {

  // 1. Какие типы данных существуют в js
  // 2. Виды операторов по количеству операндов
  // 3. Инкремент, декремент операторы слева справа
  // 4. Операторы сравнения
  // 6. Строгое и не строгое сравнение
  // 7. Сравнение разных типов

     0 == '0'           // true
     0 == false         // true
     ' ' == false       // true
     null == undefined  // true
     null > 0           // false
     null == 0          // false
     null >= 0          // true

   8. Условное ветвление
   9. Логические операторы

     "8" || 8          // "8"
      0 || 1            // 1
      7 > 10 || 8 > 18  // false

      0 && 9           // 0
      8 < 10 && 8 > 10 // false

      !!0 < !!7       // true
      null ?? 8       // 8
      0 ?? 7          // 0

      0 == []         // true
      '0' == []       // false

    // 10. Метки в циклах
    // 11. Конструкция "switch" цикл?
    // 12. Виды функций
    // 13. Полифилы что это?
    // 14. Методы создания объекта (два основных)
    // 15. Есть ли какие либо ограничения на создания имен свойств объекта
    // 16. Как проверить существует ли свойство в оъекте
    // 17. Как перебрать все свойства объекта
    // 18. Упорядочиваются ли свойства объекта при их создании
    // 19. Как удалить свойство объекта
    20. Как скопировать объект

      // for in
      // Object.assign({}, obj2, obj3)
      // {...user}
      // structuredClone()
      // lodash _cloneDeep(obj)
      // Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptor())

    // 21. Сборщик мусора, Внутренние алгоритмы работы

    // const ilona = {
    //   age: 25,
    //   friend: null,
    // }

    // const olga = {
    //   age: 24,
    //   friend: null,
    // }

    // ilona.friend = olga;
    // olga.friend = ilona;

    // ilona.friend = null;
    // olga.friend

  //  22. Метод объекта this


  //  var f = function() {
  //     this.x = 5;
  //     (function() {
  //         this.x = 3;
  //     })();
  //     console.log(this.x);
  //   };

  //   var obj = {x: 4, m: function() {
  //       console.log(this.x);
  //   }};

  //   console.log(this)
  //   f();
  //   new f();
  //   obj.m();
  //   new obj.m();
  //   f.call(f);
  //   obj.m.call(f);

  //   // window
  //   // 3
  //   // 5
  //   // 4
  //   // undefined
  //   // 5
  //   // 5



  //   function sayHi() {
  //     'use strict'
  //     alert(this);
  //   }
  //   sayHi(); 



  //   let user = {
  //     firstName: "Ilya",
  //     sayHi() {
  //       let arrow = () => console.log(this.firstName);
  //       arrow();
  //     }
  //   };
  //   user.sayHi();



    // 23. Что такое функция конструктор в JS
    // Как проверить, что функция была вызвана в режиме конструктора new.target

    // 24. Опциональная цепочка ?.?.?.
    // 25. Тип данных Symbol
    // 26. Преобразование объектов в примитивы
    // 27. Откуда у примитивов беруться Методы

    // let str = "Привет";
    // str.test = 5; // (*)
    // alert(str.test);

    // 28. Как проверить число на NaN отличия isNaN(value) от Number.isNaN(value)
    // 29. Строгое сравнение двух объектов Object.is(value1, value2)
    // 30. Способы создания массивов
    // 31. Структуры данных - Очередь и стек
    // 32. Цикл для массивов for, for of или for in - но от подтаскивает все свойства объекта
    // 33. Что такое length в массиве
    // 33. Можно ли напрямую менять свойство length
    // 34. Как определить, что перед нами массив Array.isArray() ведь typeof возвр object
    // 35. Перебираемые объекты - Symbol.iterator

    --- Промисы:

    console.log('start');

    const promise1 = Promise.resolve().then(() => {
      console.log('promise1');
      const timer2 = setTimeout(() => {
        console.log('timer2')
      }, 0)
    });

    const timer1 = setTimeout(() => {
      console.log('timer1')
      const promise2 = Promise.resolve().then(() => {
        console.log('promise2')
      })
    }, 0)

    console.log('end');

    // start
    // end
    // promise1
    // timer1
    // promise2
    // timer2


    --- Замыкание:

    let count = 0;

    (function immediate() {
      if (count === 0) {
        let count = 1;
        console.log(count); // 1
      }
      console.log(count); // 0
    })();


    --- Снова замыкание

    for (var i = 0; i < 3; i++) {
      setTimeout(function log() {
        console.log(i); // 3 3 3
      }, 1000);
    }


    --- Прототипы


    () => {


      function SomeFuncFirst(FirstVar) {
        this.FirstVar = FirstVar;
        this.SecondVar = FirstVar;

        var a = 'var';

        const c = 1;

        this.getA = function() {
          (function a() {
            console.log(a)
            console.log(c)
            console.log(this.SecondVar)
          })();

          return a;
        }

      }


      SomeFuncFirst.prototype.consoleLogTextFirst = function() {
        console.log('text')
      }

      function SomeFuncSecond(firstVar, SecondVar) {
        SomeFuncFirst.call(this, firstVar)
        this.SecondVar = SecondVar;
      }

      SomeFuncSecond.prototype = Object.create(SomeFuncFirst.prototype);
      SomeFuncSecond.prototype.constructor = SomeFuncSecond;

      const mySomeFunc = new SomeFuncSecond('firstVar', 'SecondVar')
      console.log(mySomeFunc.getA())
      console.log(mySomeFunc.firstVar)
      console.log(mySomeFunc.SecondVar)

    }






    




}
