
(() => {
  function myFunc(callBack: Function) {
    const value = callBack();
    return value;
  }
  myFunc(Math.trunc);
});


(() => {
  function myFunc2(callBack: () => number) {
    const value = callBack();
    return value;
  }
  myFunc2(Math.round)
});


(() => {
  function myFunc3(callback: (num: number) => string) {
    const value = callback(2);
    return value;
  }
  myFunc3()
});


(() => {
  // Реализуйте функцию filter(), которая принимает на вход массив чисел и предикат. 
  // Последний будет использоваться для проверки каждого числа на соответствие требованиям:
  // Параметры функции:
  //     Массив чисел
  //     Анонимная функция, которая принимает на вход число и возвращает логическое значение

  function filter(numbers: Array<number>, callback: (num: number) => boolean): Array<number> {
    let result: Array<number> = [];
    for(let i = 0; i < numbers.length; ++i) {
      const item = numbers[i];
      callback(item) && result.push(item)
    }
    return result;
  }

  const numbers = [1, -5, 2, 3, 4, 133];
  filter(numbers, (n) => n > 3); // [4, 133]
  filter(numbers, (n) => n % 2 == 0); // [2, 4]
})

