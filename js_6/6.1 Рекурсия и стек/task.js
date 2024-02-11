// Получить сумму всех зарплат в компании

let company = {
  sales: [{ name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
  development: {
    sites: [{ name: 'Peter', salary: 2000 }, {name: 'Alex', salary: 1800 }],
    internals: [{ name: 'Jack', salary: 1300 }]
  }
};

const getSum = (data) => {
  if(Array.isArray(data)) {
    return data.reduce((acc, item) => {
      return acc + item.salary;
    }, 0)
  } else {

    let result = 0;

    for(const value of Object.values(data)) {
      result += getSum(value);
    }

    return result;
  }
}

getSum(company)



// Вычислить сумму чисел до данного
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Сделайте три варианта решения:
// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.
// Пример работы вашей функции:
// function sumTo(n) { /*... ваш код ... */ }
// alert( sumTo(100) ); // 5050
// P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?
// P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?


function sumTo(n) {
  let sum = 0;
  for(let i = 0; i <= n; ++i) {
    sum += i;
  }

  return sum;
}

console.log( sumTo(100) ); // 5050


  



  


