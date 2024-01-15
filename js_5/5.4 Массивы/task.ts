
// Давайте произведём 5 операций с массивом.
// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». 
// Ваш код для поиска значения в середине должен работать 
// для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.

const arr: string[] = ['Джаз', 'Блюз'];
console.log(arr)

arr.push('Рок-н-ролл')
console.log(arr)

function changeMiddleItem(arr: string[]): string[] {
  const middleIndexItem: number = Math.floor(arr.length / 2)
  arr[middleIndexItem] = 'Классика';
  return arr;
}

changeMiddleItem(arr)
console.log(arr)

const firstItem = arr.shift;
console.log(firstItem)

arr.unshift('Рэп', 'Регги')
console.log(arr)



// Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, 
// пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

function sumInput() {
  const resultArr: number[] = [];

  for(;;) {
    const value = prompt('Введите число', '0');
    if(!value || typeof value === null) {
      break;
    } 
    resultArr.push(+value)
  }

  const result = resultArr.reduce((acc, item) => {
    return acc += item
  }, 0)
  
  alert(result)
}

sumInput()



// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
// Функция getMaxSubSum(arr) должна возвращать эту сумму.
// Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:
// Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.

function getMaxSubSum(arr: number[]) {
  const arrNegativeItems = arr.filter(item => item >= 0);
  if(!arrNegativeItems.length) return 0;
  if(arrNegativeItems.length === arr.length) {
    return arr.reduce((acc, item) => {
      return acc += item;
    }, 0)
  }

  let maxResult = 0;
  let resultMiniArr = 0;

  for(let i = 0; i <= arr.length; ++i) {
    if(arr[i] > maxResult) {
      maxResult = arr[i];
      resultMiniArr = arr[i];
    }

    for(let j = i + 1; j < arr.length; ++j) {
      resultMiniArr += arr[j];
      if(maxResult < resultMiniArr) {
          maxResult = resultMiniArr 
      }
    }
    resultMiniArr = 0;
  }

  return maxResult;
}

getMaxSubSum([-1, 2, 3, -9]) // == 5 
getMaxSubSum([2, -1, 2, 3, -9]) // == 6
getMaxSubSum([-1, 2, 3, -9, 11]) // == 11
getMaxSubSum([-2, -1, 1, 2]) // == 3
getMaxSubSum([100, -9, 2, -3, 5]) // == 100
getMaxSubSum([1, 2, 3]) // == 6
getMaxSubSum([-1, -2, -3]) // = 0


