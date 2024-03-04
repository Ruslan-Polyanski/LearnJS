
() => {

  function myHardFunc(num) {
    let result = null;
  
    for(let i = num; i < 100000000; ++i) {
      ++result
    }
  
    return result;
  }
  
  
  function cashDecorator(func) {
    const cashMap = new Map();
  
    return function(num) {
      if(cashMap.has(num)) return cashMap.get(num);
  
      const result = func(num);
      cashMap.set(num, result)
  
      return result;
    }
  
  }
  
  myHardFunc = cashDecorator(myHardFunc);
  
  myHardFunc(100)
  myHardFunc(500)
  myHardFunc(700)

}



() => {

  let worker = {
    method() {
      return 2;
    },
  
    myHardFunc(num) {
      return num * this.method();
    }
  };

  function cashDecorator(func) {
    const cashMap = new Map();

    return function(num) {
        if(cashMap.has(num)) return cashMap.get(num);

        const result = func.call(this, num);
        cashMap.set(num, result)

        return result;
    }
  }

  worker.myHardFunc = cashDecorator(worker.myHardFunc);

  worker.myHardFunc(100)

}



() => {

  let worker = {
    name: 'worker',
    slow(min, max) {
      return min + max + ' - ' + this.name;
    }
  };

  function hash(args) {
    return args[0] + ',' + args[1];
  }

  function cachingDecorator(func, hash) {
    const cachMap = new Map();

    return function() {
      const key = hash(arguments);
      if(cachMap.has(key)) return cachMap.get(key);

      const result = func.call(this, ...arguments);
      // const result = func.apply(this, arguments);
      cachMap.set(key, result)

      return result;
    }
  }
  

  worker.slow = cachingDecorator(worker.slow, hash);
  worker.slow(3, 5)
  worker.slow(13, 7)

}



() => {

  // перенаправлением вызова

  let wrapper = function() {
    return func.apply(this, arguments);
  };

}



() => {

  // заимствование метода

  function hash() {
    alert( [].join.call(arguments) ); // 1,2
  }
  
  hash(1, 2);

// arr.join(glue)
// Пускай первым аргументом будет glue или, в случае отсутствия аргументов, им будет запятая ","
// Пускай result будет пустой строкой "".
// Добавить this[0] к result.
// Добавить glue и this[1].
// Добавить glue и this[2].
// …выполнять до тех пор, пока this.length элементов не будет склеено.
// Вернуть result.

}



() => {

  let worker = {
    name: 'worker',
    slow(min, max, ...rest) {
      if(rest.length) {
        return min + max + ',' + rest + ' - ' + this.name;
      }
      return min + max + ' - ' + this.name;
    }
  };

  function hash(args) {
    return [].join.call(args)
  }

  function cachingDecorator(func, hash) {
    const cachMap = new Map();

    return function() {
      const key = hash(arguments);
      if(cachMap.has(key)) return cachMap.get(key);

      const result = func.call(this, ...arguments);
      // const result = func.apply(this, arguments);
      cachMap.set(key, result)

      return result;
    }
  }
  

  worker.slow = cachingDecorator(worker.slow, hash);
  worker.slow(3, 5, 10, 12, 7, 4)
  worker.slow(13, 7)

}



() => {

// Декоратор-шпион
// Создайте декоратор spy(func), который должен возвращать обёртку, 
// которая сохраняет все вызовы функции в своём свойстве calls.
// Каждый вызов должен сохраняться как массив аргументов.

    function work(a, b) {
      alert( a + b ); // произвольная функция или метод
    }

    function spy(func) {
      const calls = [];

      return function mySpy() {
        calls.push([...arguments])
        func(...arguments)
        mySpy.calls = calls;
      }
    }

    work = spy(work);

    work(1, 2); // 3
    work(4, 5); // 9

    for (let args of work.calls) {
      alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
    }

}



() => {

  // Декоратор-шпион
  // Создайте декоратор spy(func), который должен возвращать обёртку, 
  // которая сохраняет все вызовы функции в своём свойстве calls.
  // Каждый вызов должен сохраняться как массив аргументов.

      function work(a, b) {
        alert( a + b ); // произвольная функция или метод
      }
  
      function spy(func) {
  
        function mySpy(...args) {
          mySpy.calls.push(args)

          return func.apply(this, args);
        }

        mySpy.calls = [];

        return mySpy;
      }
  
      work = spy(work);
  
      work(1, 2); // 3
      work(4, 5); // 9
  
      for (let args of work.calls) {
        alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
      }
  
  }



  () => {

    // Декоратор-шпион
    // Создайте декоратор spy(func), который должен возвращать обёртку, 
    // которая сохраняет все вызовы функции в своём свойстве calls.
    // Каждый вызов должен сохраняться как массив аргументов.
  
        function work(a, b) {
          alert( a + b ); // произвольная функция или метод
        }
    
        function spy(func) {
    
          function mySpy() {
            mySpy.calls.push([...arguments])
  
            return func.call(this, ...arguments);
          }
  
          mySpy.calls = [];
  
          return mySpy;
        }
    
        work = spy(work);
    
        work(1, 2); // 3
        work(4, 5); // 9
    
        for (let args of work.calls) {
          alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
        }
    
    }



    () => {

      // Задерживающий декоратор
      // Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд.
      // Другими словами, delay(f, ms) возвращает вариант f с «задержкой на ms мс».
      // В приведённом выше коде f – функция с одним аргументом, но ваше решение должно передавать
      // все аргументы и контекст this.

      function f(x) {
        alert(x);
      }

      function delay(f, ms) {

        return function() {
          const timerId = setTimeout(() => {
            f.call(this, ...arguments)
            clearTimeout(timerId)
          }, ms);
        }
      }
      
      // создаём обёртки
      let f1000 = delay(f, 10000);
      let f1500 = delay(f, 15000);
      
      f1000("test");
      f1500("test");

    }



    () => {

      // Задерживающий декоратор
      // Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд.
      // Другими словами, delay(f, ms) возвращает вариант f с «задержкой на ms мс».
      // В приведённом выше коде f – функция с одним аргументом, но ваше решение должно передавать
      // все аргументы и контекст this.

      function f(...rest) {
        alert(rest);
      }

      function delay(f, ms) {

        return function() {
          const timerId = setTimeout(() => {
            f.apply(this, arguments)
            clearTimeout(timerId)
          }, ms);
        }
      }
      
      // создаём обёртки
      let f1000 = delay(f, 10000);
      let f1500 = delay(f, 15000);
      
      f1000("test");
      f1500("test");

    }



    () => {

    // Декоратор debounce
    // Результат декоратора debounce(f, ms) – это обёртка, которая откладывает вызовы f, 
    // пока не пройдёт ms миллисекунд бездействия (без вызовов, «cooldown period»), 
    // а затем вызывает f один раз с последними аргументами.
    // Другими словами, debounce – это так называемый секретарь, который 
    // принимает «телефонные звонки», и ждёт, пока не пройдет ms миллисекунд тишины. 
    // И только после этого передает «начальнику» информацию о последнем звонке 
    // (вызывает непосредственно f).
    // Например, у нас была функция f и мы заменили её на f = debounce(f, 1000).
    // Затем, если обёрнутая функция вызывается в 0, 200 и 500 мс, а потом вызовов нет, 
    // то фактическая f будет вызвана только один раз, в 1500 мс. 
    // То есть: по истечению 1000 мс от последнего вызова.
    
        function f(data) {
          alert(data)
        }

        function debounce(f, ms) {
          let timerId = null;

          return function() {
            
            timerId = setTimeout(() => {
              f.call(this, ...arguments)
              clearTimeout(timerId)
            }, ms);
          }
        }

        f = debounce(f, 1000);

        setTimeout(() => { f('test 1') }, 0)
        setTimeout(() => { f('test 2') }, 500)
        setTimeout(() => { f('test 3') }, 700)

    }



    () => {

      // Тормозящий (throttling) декоратор
      // Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку.
      // При многократном вызове он передает вызов f не чаще одного раза в ms миллисекунд.
      // По сравнению с декоратором debounce поведение совершенно другое:
      // debounce запускает функцию один раз после периода «бездействия». 
      // Подходит для обработки конечного результата.
      // throttle запускает функцию не чаще, чем указанное время ms. 
      // Подходит для регулярных обновлений, которые не должны быть слишком частыми.
      // Другими словами, throttle похож на секретаря, который принимает телефонные звонки, 
      // но при этом беспокоит начальника (вызывает непосредственно f) не чаще, 
      // чем один раз в ms миллисекунд.
      // Давайте рассмотрим реальное применение, чтобы лучше понять это требование и выяснить, 
      // откуда оно взято.
      // Например, мы хотим отслеживать движения мыши.
      // В браузере мы можем реализовать функцию, которая будет запускаться при каждом перемещении 
      // указателя и получать его местоположение. Во время активного использования мыши 
      // эта функция запускается очень часто, что-то около 100 раз в секунду (каждые 10 мс). 
      // Мы бы хотели обновлять некоторую информацию на странице при передвижении указателя.
      // …Но функция обновления update() слишком ресурсоёмкая, чтобы делать это при каждом микродвижении. 
      // Да и нет смысла делать обновление чаще, чем один раз в 1000 мс.
      // Поэтому мы обернём вызов в декоратор: будем использовать throttle(update, 1000) как функцию, 
      // которая будет запускаться при каждом перемещении указателя вместо оригинальной update(). 
      // Декоратор будет вызываться часто, но передавать вызов в update() максимум раз в 1000 мс.
      // Визуально это будет выглядеть вот так:
      // Для первого движения указателя декорированный вариант сразу передаёт вызов в update. 
      // Это важно, т.к. пользователь сразу видит нашу реакцию на его перемещение.
      // Затем, когда указатель продолжает движение, в течение 1000 мс ничего не происходит. 
      // Декорированный вариант игнорирует вызовы.
      // По истечению 1000 мс происходит ещё один вызов update с последними координатами.
      // Затем, наконец, указатель где-то останавливается. Декорированный вариант ждёт, 
      // пока не истечёт 1000 мс, и затем вызывает update с последними координатами. 
      // В итоге окончательные координаты указателя тоже обработаны.
      // P.S. Аргументы и контекст this, переданные в f1000, должны быть переданы в оригинальную f.

      function f(a) {
        console.log(a)
      }

          function throttle(func, ms) {
            let isStart = false;
            let myArgs = null;
            let myThis = null;
          
            return function wrapp() {
              if (isStart) {
                myArgs = arguments;
                myThis = this;
              } else {
                func.apply(this, arguments); 
                isStart = true;
                setTimeout(function() {
                  isStart = false; 
                  if (myArgs) {
                    wrapp.apply(myThis, myArgs);
                    myArgs = myThis = null;
                  }
                }, ms);
              }
            }
          }

      const f1000 = throttle(f, 1000);
      
      f1000(1); // показывает 1
      f1000(2); // (ограничение, 1000 мс ещё нет)
      f1000(3); // (ограничение, 1000 мс ещё нет)
      f1000(4); 
      f1000(5);
      f1000(6);
      f1000(7);
      
      // когда 1000 мс истекли ...
      // ...выводим 3, промежуточное значение 2 было проигнорировано

    }
