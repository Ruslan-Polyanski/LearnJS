
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
