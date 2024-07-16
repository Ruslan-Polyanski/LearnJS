
// Реализуйте функцию reverse(), которая переворачивает массив. 
// Технически она должна возвращать новый массив, 
// в котором элементы расположены в обратном порядке. 
// Используйте модификатор readonly для входящего массива. 
// Не используйте встроенный метод reverse().

function reverse(arrNumbers: readonly number[]): number[] {
  const reverseArr: number[] = [];
  const serialNum = arrNumbers.length - 1;

  for(let i = serialNum; i >= 0; --i) {
    reverseArr.push(arrNumbers[i])
  }

  return reverseArr;
}

reverse([1, 2, 8]); // [8, 2, 1]
reverse([10, 33, 7, 0]); // [0, 7, 33, 10]