
// Вывод каждую секунду
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, 
// начиная от from и заканчивая to.
// Сделайте два варианта решения.
// Используя setInterval.
// Используя рекурсивный setTimeout.

() => {

  function printNumbers(from, to) {

    let timerId = setInterval(function run() {

      console.log(from)

      if(from === to) {
        clearInterval(timerId)
      }

      from++

    }, 1000)

  }

  printNumbers(2, 7)

}


() => {

  function printNumbers(from, to) {

    let timerId = setTimeout(function run() {

      console.log(from)

      if(from === to) {
        clearTimeout(timerId);
      } else {
        from++
        timerId = setTimeout(run, 1000)
      }

    }, 1000)

  }

  printNumbers(3, 9)

}


() => {

  function printNumbers(from, to) {

    function run() {

      console.log(from)

      if(from === to) {
        clearInterval(timerId)
      }

      from++

    }

    run()

    let timerId = setInterval(run, 1000);

  }

  printNumbers(3, 9)

}


// Что покажет setTimeout?
// В приведённом ниже коде запланирован вызов setTimeout, 
// а затем выполняется сложное вычисление, для завершения которого 
// требуется более 100 мс.
// Когда будет выполнена запланированная функция?
// После цикла.
// Перед циклом.
// В начале цикла.
// Что покажет alert?



() => {

  let i = 0;

  setTimeout(() => alert(i), 100); // ?
  
  // предположим, что время выполнения этой функции >100 мс
  for(let j = 0; j < 100000000; j++) {
    i++;
  }

  // 100000000
  
}