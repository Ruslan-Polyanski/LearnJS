
// Функция должна работать с объектами

() => {

  const obj = {
    a: 1,
    b: 2,
    method() {
      console.log(this.a + this.b)
    }
  };
  
  // Функцию f можно вообще удалить, 
  // так как мы работаем с методом обьекта, 
  // и передавать далее будет метод обьекта без вызова

  function f(a, b) {
    console.log(a + b)
  }
  
  function defer(ms, func) {
    return function(...args) {
      setTimeout(() => func(...args), ms)
    }
  }
  
  const deferredF = defer(1000, f);
  
  // так же можем убрать аргументы из вызова, т.к. 
  // задача работать с обьектом и его данными
  deferredF(1, 2)

}



// Решение

() => {

  const obj = {
    a: 1,
    b: 2,
    method() {
      console.log(this.a + this.b)
    }
  };

  function defer(ms, func) {
    return function() {
      setTimeout(() => func.call(this), ms)
    }
  }

  const deferredF = defer(1000, obj.method);
  
  deferredF.call(obj)
  // или deferredF.apply(obj)
  // или obj.deferredF = deferredF и затем obj.deferredF()

}