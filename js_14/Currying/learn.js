
() => {

  function carry(func) {
    return function(a) {
      return function(b) {
        return func(a, b)
      }
    }
  }

  function myFucn(a, b) {
    return a + b;
  }

  const carring = carry(myFucn);

  carring(1)(2)

}


() => {

  function log(date, importance, message) {
    alert(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
  }

}


() => {

  function carry(func) {
    return function carried(...args) {
      if(args.length >= func.length) {
        return func.apply(this, args)
      } else {
        return function(...args2) {
          return carried.apply(this, [...args, ...args2]);
        }
      }
    }
  }

  function sum(a, b, c) {
    return a + b + c;
  }

  const carrySum = carry(sum);

  console.log(carrySum(3, 3, 4))
  console.log(carrySum(3, 3)(4))
  console.log(carrySum(3)(3, 4))
  console.log(carrySum(3)(3)(4))
  console.log(carrySum()()(3)(3)(4))

}