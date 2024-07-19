
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