
() => {

  // Добавить функциям метод "f.defer(ms)"
  // Добавьте всем функциям в прототип метод defer(ms), 
  // который вызывает функции через ms миллисекунд.

  if(!Function.prototype.defer) {
    Function.prototype.defer = function(ms) {
      setTimeout(() => {
        this()
      }, ms)
    }
  }

  function f() {
    alert("Hello!");
  }

  f.defer(1000); // выведет "Hello!" через 1 секунду

}



() => {

  // Добавьте функциям декорирующий метод "defer()"
  // Добавьте всем функциям в прототип метод defer(ms), 
  // который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

  if(!Function.prototype.defer) {

    Function.prototype.defer = function(ms) {
      
          const myThis = this;
          return function(...rest) {
              setTimeout(() => {
                myThis(...rest)
              }, 1000)
          }

    }

  }

  function f(a, b) {
    alert( a + b );
  }

  f.defer(1000)(1, 2); // выведет 3 через 1 секунду.

}



() => {

  if(!Function.prototype.defer) {

    Function.prototype.defer = function(ms) {
      
          return (...rest) => {
              setTimeout(() => {
                this(...rest)
              }, 1000)
          }

    }

  }

  function f(a, b) {
    alert( a + b );
  }

  f.defer(1000)(1, 2); // выведет 3 через 1 секунду.

}