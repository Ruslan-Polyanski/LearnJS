
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
