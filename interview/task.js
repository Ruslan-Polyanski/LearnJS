
// // 3
// //Вернуть два числа в сумме 21. Максимум один цикл.
// let arr = [1, 3, 4, 6, 5, 10, 12, 7, 8, 11, 21, 22]
//
// function findPairWithSum(target, arr) {
// // code here
// }
//
// console.log(findPairWithSum(21, arr))
// // __________________________________________________________________________
//
// // 4
// // Проверить, совпадают ли массивы чисел. Нельзя переводить в строки
// function isSimilar(arr1, arr2) {
// // code here
// }
//
// isSimilar([0, 1, 2], [2, 1, 0])
// console.log(isSimilar([0, 1, 2], [2, 1, 0])) // true
// console.log(isSimilar([0, 1], [2, 1, 0]))// false
// console.log(isSimilar([0, 5, 1], [0, 1, 5]))  // true
// // __________________________________________________________________________
//
// // 5
// // Поиск уникального элемента в массиве
// // Напишите функцию, которая находит уникальный элемент в массиве чисел,
// // где все числа повторяются дважды, за исключением одного.
//
// function findUniqueElement(arr) {
// // code here
// }
//
// const arrayExample = [1, 2, 3, 4, 1, 2, 3];
// console.log(findUniqueElement(arrayExample)); // Выведет 4
// const arrayExample2 = [1, 2, 3, 4, 1, 2, 3, 4];
// console.log(findUniqueElement(arrayExample2)); // Выведет null
// const arrayExample3 = [1, 2, 3, 4, 1, 2, 0, 3, 4];
// console.log(findUniqueElement(arrayExample3)); // Выведет 0


() => {

  // Убрать рядом стоящие повторы символов

  function toUnique(unique) {
  // code here
  }

  console.log(toUnique("AAAAABBBCCDDDDDABBBCCC")) // ABCDABC
  console.log(toUnique("AAAAABBBCCccDDDAfffBBCCC")) // ABCcDAfBC
  console.log(toUnique([1, 1, 2, 2, 2, 3, 4, 4, 4, 5, 5])) // 1 2 3 4 5

}



() => {

  function toUnique(unique) {
    let data = null;
    const result = [];

    if(!Array.isArray(unique)) {
      data = unique.split('');
    } else {
      data = unique.slice();
    } 

    data.forEach(item => {
      result.at(-1) === item ? null : result.push(item);
    });

    return result.join('');

  }

  console.log(toUnique("AAAAABBBCCDDDDDABBBCCC")) // ABCDABC
  console.log(toUnique("AAAAABBBCCccDDDAfffBBCCC")) // ABCcDAfBC
  console.log(toUnique([1, 1, 2, 2, 2, 3, 4, 4, 4, 5, 5])) // 1 2 3 4 5

}



() => {

  // Убрать "_" "-" и сделать текст согласно CamelCase

  function toUpperString(str) {
  // code here
  }

  console.log(toUpperString("what-a-nice-day-today")) // whatANiceDayToday
  console.log(toUpperString("What_a_nice_day_today")) // WhatANiceDayToday
  console.log(toUpperString("what_a_nice-day_today")) // whatANiceDayToday

}



() => {

  // Убрать "_" "-" и сделать текст согласно CamelCase

  function toUpperString(str) {
      const re = /_|-/;
      const data = str.split(re);

      const result = data.reduce((acc, item, index) => {
        if(index === 0) {
          return acc = acc + item;
        }

        return acc = acc + item.at(0).toUpperCase() + item.slice(1);
      }, '')
      
      return result;
    }
  
    console.log(toUpperString("what-a-nice-day-today")) // whatANiceDayToday
    console.log(toUpperString("What_a_nice_day_today")) // WhatANiceDayToday
    console.log(toUpperString("what_a_nice-day_today")) // whatANiceDayToday

}