
() => {

  const stringForEvel = prompt('Сколько тебе лет?', '');
  const result = eval(stringForEvel);
  eval('alert(result)');

}


() => {

  // Напишите функцию, которая принимает строку с арифметическим
  // выражением и возвращает резльтат его вычисления

  function calc(message) {
    return eval(message)
  }

  console.log(calc('1 + 2 * 4'))
  console.log(calc('(5 - 2) / 4'))

}


() => {

  // Напишите функцию, которая принимает строку с именем 
  // переменной и значением, и создает эту переменную в 
  // глобальной области видимости.

  function doVariable(name, value) {
    window.eval(`var ${name} = ${value}`)
  }

  doVariable('myNumber', 42);
  console.log(myNumber);

}
