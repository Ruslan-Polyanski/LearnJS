
() => {

  // Написать функцию которая уберет из массива дубликаты.

  const arr = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

  function filterArr(arr){
    const set = new Set(arr);
    return [...set];
  }

  filterArr(arr)

}

() => {

  // Написать функцию которая уберет из массива дубликаты.

  const arr = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

  function filterArr(arr){
    const map = new Map();

    arr.forEach(item => {
      map.has(item) ? null : map.set(item, item);
    })
     
    return [...map.keys()]
  }

  filterArr(arr)

}

() => {

  // Написать функцию которая уберет из массива дубликаты.

  const arr = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

  function filterArr(arr){
    const obj = {};

    arr.forEach(item => {
      obj[item] ? null : obj[item] = item;
    })

    return Object.values(obj)
  }

  filterArr(arr)

}

() => {

  // Развернуть каждое слово в строке наоборот, при этом каждое слово должно остаться
  // на своем месте

  const str = "Welcome to this Javascript Cuide!";

  function revertStr(str) {
    const strSplit = str.split(' ');
    const resultArr = [];

    strSplit.forEach(item => {
      const itemSplit = item.split('');
      const revertItem = [];

      for(let i = itemSplit.length - 1; i >= 0; --i) {
        revertItem.push(itemSplit[i])
      }

      resultArr.push(revertItem.join(''))
    })

    return resultArr.join(' ');

  }

  revertStr(str)

}

() => {

  // Развернуть каждое слово в строке наоборот, при этом каждое слово должно остаться
  // на своем месте

  const str = "Welcome to this Javascript Cuide!";

  function revertStr(str) {
    const strSplit = str.split(' ');
    const resultArr = [];

    strSplit.forEach(item => {
      const reversedItem = item.split('').reverse();
      resultArr.push(reversedItem.join(''))
    })

    return resultArr.join(' ')

  }

  revertStr(str)

}

// Как работает Event Loop

() => {

  const promise = new Promise(resolve => {
    console.log(1)

    setTimeout(() => {
      console.log('timerStart')
      resolve('succsess')
      console.log('timerEnd')
    }, 0)

    console.log(2)
  })

  promise.then((res) => {
    console.log(res)
  })

  console.log(4)

}

() => {

  // За какое минимальное время выполниться add1 и add2
  // Переписать второй вариант с через Promise API

  function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x)
      }, 2000)
    })
  }

  async function add1(x) {
    const a = await resolveAfter2Seconds(20);
    const b = await resolveAfter2Seconds(30);
    return x + a + b;
  }

  async function add2(x) {
    const promise_a = resolveAfter2Seconds(20);
    const promise_b = resolveAfter2Seconds(30);
    return x + (await promise_a) + (await promise_b);
  }

  // async function add2(x) {
  //   const promise_a = resolveAfter2Seconds(20);
  //   const promise_b = resolveAfter2Seconds(30);
  //   const numbers = await Promise.all([promise_a, promise_b]);
  //   return x + numbers.reduce((acc, item) => acc + item, 0);
  // }

  add1(10).then(console.log) // 4 seconds - 60
  add2(20).then(console.log) // 2 senonds - 70

}

// Что такое меоизация, как она реализована в React

() => {

  // Написать функцию memo которая будет оберткой над основной функцией, и в зависимости
  // от значения бедет считать результат или будет его брать без расчета.
  // переписать функцию для произвольного числа аргументов (порядок не важен)

  const pow = (a) => a * a;

  const memo = (func) => {
    const map = new Map();

    return function(arg) {
      if(map.has(arg)) {
        // console.log('Достаем из кеша')
        return map.get(arg)
      } else {
        const result = func(arg);
        map.set(arg, result)
        // console.log('Считаем')
        return result;
      }
    }
  }

  const memoised = memo(pow);
  memoised(4)
  memoised(4)
  memoised(3)
  memoised(4)
  memoised(3)

}

() => {

  // переписать функцию memo для произвольного числа аргументов (порядок не важен)

  const pow = (a, b) => a * b;

  const memo = (func) => {
    const map = new Map();

    return function(...args) {
      const strArgs = JSON.stringify(args);

      if(map.has(strArgs)) {
        console.log('Достаем из кеша')
        return map.get(strArgs)
      } else {
        const result = func(...args);
        map.set(strArgs, result)
        console.log('Считаем')
        return result;
      }
    }
  }

  const memoised = memo(pow);
  memoised(4, 5)
  memoised(4, 5)
  memoised(3, 5)
  memoised(4, 5)
  memoised(3, 5)

}

// Что такое дискрипторы свойств




