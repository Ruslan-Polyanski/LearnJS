
// Установка и уменьшение значения счётчика
// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:
// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
// Посмотрите код из песочницы с полным примером использования.
// P.S. Для того, чтобы сохранить текущее значение счётчика, 
// можно воспользоваться как замыканием, так и свойством функции. 
// Или сделать два варианта решения: и так, и так.

() => {

  function makeCounter() {

    function counter() {
      return counter.count++;
    };

    counter.set = (value) => {
      counter.count = value;
    };

    counter.decrease = () => {
      --counter.count
    }

    counter.count = 0;

    return counter;
  }
  
  let counter = makeCounter();
  
  counter() // 0
  counter()// 1
  
  counter.set(10); // установить новое значение счётчика
  
  counter()// 10
  
  counter.decrease(); // уменьшить значение счётчика на 1
  
  counter() // 10 (вместо 11)

}



() => {

  function makeCounter() {

    let count = 0;

    function counter() {
      return count++;
    };

    counter.set = (value) => {
      count = value;
    };

    counter.decrease = () => {
      --count
    }

    return counter;
  }
  
  let counter = makeCounter();
  
  counter()// 0
  counter()// 1
  
  counter.set(10); // установить новое значение счётчика
  
  counter()// 10
  
  counter.decrease(); // уменьшить значение счётчика на 1
  
  counter() // 10 (вместо 11)
}


// Сумма с произвольным количеством скобок
// Напишите функцию sum, которая бы работала следующим образом:
// P.S. Подсказка: возможно вам стоит сделать особый метод преобразования 
// в примитив для функции.

() => {

  function sum(value) {
    let count = value;
  
    const func = (otherValue) => {
      count += otherValue;
      return func;
    }

    func[Symbol.toPrimitive] = function() {
      return count;
    };

    return func;
  }

  sum(1)(2) // 1 + 2
  sum(1)(2)(3) // 1 + 2 + 3
  sum(5)(-1)(2)
  sum(6)(-1)(-2)(-3)
  sum(0)(1)(2)(3)(4)(5)

}




