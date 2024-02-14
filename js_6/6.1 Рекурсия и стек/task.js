// Получить сумму всех зарплат в компании

() => {

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

}



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

() => {

  function sumTo(n) {
    let sum = 0;
    for(let i = 0; i <= n; ++i) {
      sum += i;
    }
  
    return sum;
  }
  
  console.log(sumTo(100)) // 5050

}



() => {

  function sumTo(n) {
    if(n === 1) {
      return 1;
    }

    return n + sumTo(n - 1);
  }
  
  console.log(sumTo(100)) // 5050

}


() => {

  function sumTo(n) {
    return (n*(n + 1))/2;
  }
  
  console.log(sumTo(100)) // 5050

}



// Задача – написать функцию factorial(n), которая возвращает n!, 
// используя рекурсию.

() => {

  const factorial = (n) => {
    if(n === 1) return 1;
  
    return n * factorial(n - 1);
  }
  
  console.log(factorial(5)); // 120

}



// Числа Фибоначчи
// Последовательность чисел Фибоначчи определяется формулой 
// Fn = Fn-1 + Fn-2. То есть, следующее число получается как 
// сумма двух предыдущих.
// Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) 
// и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
// Числа Фибоначчи тесно связаны с золотым сечением и 
// множеством природных явлений вокруг нас.
// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

() => {

  function fib(n) {
    let first = 0;
    let second = 1;
    let next = 0;
    let result = 0;
  
    for (let i = 2; i <= n; ++i) {
      next = first + second;
      [first, second] = [second, next]
      result = next;
    }
  
    return result;
  }
  
  console.log(fib(3)); // 2
  console.log(fib(7)); // 13
  console.log(fib(77)); // 5527939700884757

}


() => {

  function fib(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;

    return fib(n - 1) + fib(n - 2);
  }
  
  console.log(fib(3)); // 2
  console.log(fib(7)); // 13
  console.log(fib(77)); // 5527939700884757

}



// Вывод односвязного списка
// Допустим, у нас есть односвязный список 
// (как описано в главе Рекурсия и стек):
// Напишите функцию printList(list), 
// которая выводит элементы списка по одному.
// Сделайте два варианта решения: используя цикл и через рекурсию.
// Как лучше: с рекурсией или без?

() => {

  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  function printList(list) {

    if(list.next === null) {
        console.log(list)
    } else {
      console.log(list)
      printList(list.next)
    }

  }

  printList(list)

}


() => {

  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  function printList(list) {

    let myObj = list;
  
    while(myObj) {
      console.log(myObj)
      myObj = myObj.next;
    }

  }

  printList(list)

}


// Вывод односвязного списка в обратном порядке
// Выведите односвязный список из предыдущего задания 
// Вывод односвязного списка в обратном порядке.
// Сделайте два решения: с использованием цикла и через рекурсию.

() => {

  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  function printList(list) {
    const arr = [];
    let listItem = list;

    while(listItem){
      arr.push(listItem)
      listItem = listItem.next;
    }

    arr.reverse()
    
    arr.forEach(item => console.log(item))

  }

  printList(list)

}


() => {

  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  function printList(list) {
    const listItem = list;

    if(listItem) {
      printList(listItem.next)
    }

    console.log(listItem)
  }

  printList(list)

}








  



  


