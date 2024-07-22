
() => {

  // To complete this Kata you need to make a function multiplyAll/multiply_all 
  // which takes an array of integers as an argument. This function must return 
  // another function, which takes a single integer as an argument and returns a new array.
  // The returned array should consist of each of the elements from the first array 
  // multiplied by the integer. You must not mutate the original array.
  // I/O multiplyAll([1, 2, 3])(2) = [2, 4, 6];

  function multiplyAll(arrNumbers) {
    const arrNum = [...arrNumbers];
    return function(num) {
      return arrNum.reduce((acc, item) => [...acc, item * num], [])
    }
  }

  multiplyAll([1, 2, 3])(2)
  multiplyAll([4, 6, 9])(5)

}


() => {

  // Your relative have decided to open a small Indian restaurant, 
  // and so she bought an automatic cooker. It publishes an API function
  // which takes another function fun and an arbitrary number of other arguments
  //  - and returns a function, which works like fun with the first arguments 
  //  replaced by the remaining arguments of curry.

  function add(a, b, c) { 
    return a + b + c;
  }

  function curry(fun, ...args) {
    return function curried(...args2) {
      return fun.apply(this, [...args, ...args2])
    }
  }

  var addOne = curry(add , 1);

  add(1, 2, 3) === addOne(2, 3);

}


() => {

  // This "curried" version of the original function should expand its arguments when 
  // invoked with arguments. It should allow multiple arguments to be passed into each 
  // invocation. It should execute the original function and then restore that 
  // function's original argument-less state when invoked without arguments.

  // function adder () {
  //   return [].slice.call(arguments).reduce(function(a,b){
  //     return a + b
  //   },0);
  // }
  
  // const curryAdder = Curry(adder);

  // curryAdder(1);
  // curryAdder(1,2,3);
  // curryAdder(2)(2,5);
  // const example = curryAdder(); // 16
  // curryAdder(1)(2);
  // const example2 = curryAdder(); // 3

}