
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

