
(() => {
  // Создайте скрипт, который запрашивает ввод двух чисел 
  // (используйте prompt) и после показывает их сумму.

  const nums: Array<number> = [];

  function getNum(): number {
    const num = prompt('Add number', '');
    if(num === null) {
      return 0;
    }
    return +num;
  }

  function writeNum(n: number): void {
    nums.push(n)
  }

  function getSum(): number {
    return nums.reduce((acc, item) => acc + item, 0)
  }

  function showResult(result: number): void {
    alert(result)
  }

  function runScript(): void {
    for(let i = 0; i < 2; ++i) {
      const num = getNum();
      writeNum(num)
    }
    const result = getSum();
    showResult(result)
  }

  runScript()

});


(() => {

  function readNumber(): void {
    let data: null | string = null;

    for(let i = 0; ; ++i) {
      const result = prompt('add number', '0');
      if(!result) {
        break;
      } 
      if(Number.isNaN(result) != true) {
        data = result;
        break;
      }
    }

    alert(data)
  }
  readNumber()

});


(() => {

  let i = 0;
  while (i != 10) {
    i += 0.2;
    console.log(i)
    if(i > 11) break;
  }

});


(() => {

  function random(min: number, max: number) {
    let result = 0;
    do {
      result = Math.random() * 10;
    } while (!(result >= min && result < max));
    return result
  }

  alert( random(1, 5) ); // 1.2345623452
  alert( random(1, 5) ); // 3.7894332423
  alert( random(1, 5) ); // 4.3435234525

})