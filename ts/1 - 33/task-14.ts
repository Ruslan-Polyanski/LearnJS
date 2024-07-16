
(() => {

  type VoidFunc = () => void;

  // Тип функции определяется через контекст
  // присваивания ее переменной с типом VoidFunc
  const f: VoidFunc = () => true;
  
  const v = f();
  
  let num: boolean = v; // не применма
  
});


(() => {
  // Попробуйте самостоятельно определить функцию forEach() для чисел:
  // Параметры функции:
  // Массив чисел
  //     Анонимная функция, которая принимает на вход число и возвращает void. 
  //     У этой функции есть необязательный параметр — индекс элемента в массиве

  function forEach(arr: Array<number>, callback: (num: number, index: number) => void): void {
    for(let i = 0; i < arr.length; ++i) {
      const item = arr[i];
      callback(item, i)
    }
  }

  forEach([1, 2, 3], (n) => console.log(n));
  // 1
  // 2
  // 3

  const result = [];
  forEach([1, 2, 3], (n) => result.push(n));
  // [1, 2, 3]

  forEach([8, 9], (n, index) => console.log(index + n));
  // 8
  // 10

})




