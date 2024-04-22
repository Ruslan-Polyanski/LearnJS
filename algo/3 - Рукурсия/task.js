
() => {

  function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2); 
  }

  console.log(fibonacci(3));

}



() => {

  function fibonacci(n, prev = 0, next = 1) {
    if (n === 0) return prev;
    if (n === 1) return next;
    return fibonacci(n - 1, next, prev + next);
  }

  console.log(fibonacci(3));

}



() => {

  // Написать функцию calculateAverageSalaries, которая принимает объект company и
  // возвращает новый объект, где ключи — это названия отделов, а значения — средняя
  // зарплата сотрудников этих отделов.
  // Если отдел содержит вложенные отделы, средняя зарплата должна учитывать сотрудников
  // всех вложенных отделов.
  // Результат должен быть представлен в формате:
  // {
  //     "sales": 800,       // средняя зарплата в отделе продаж
  //     "development": 1700 // средняя зарплата в отделе разработки, включая все подотделы
  // }

  let company = {
      sales: [{
        name: 'John',
        salary: 1000
      }, {
        name: 'Alice',
        salary: 600
      }],

      development: {
        sites: [{
          name: 'Peter',
          salary: 2000
        }, {
          name: 'Alex',
          salary: 1800
        }],

        internals: [{
          name: 'Jack',
          salary: 1300
        }]
      }
  };


  function calculateAverageSalaries(company) {
    const obj = {};

    for(const key in company) {
      if(Array.isArray(company[key])) {
        let count = 0;
        const sum = company[key].reduce((acc, obj) => {
          ++count;
          return acc + obj.salary;
        }, 0)
        const result = sum / count;
        obj[key] = result;
      } else {
        obj[key] = calculateAverageSalaries(company[key])
      }
    }

    return obj;
  }

  console.log(calculateAverageSalaries(company))

}



() => {

  console.log(0)

  const promise = new Promise((resolve, reject) => {
    console.log(1)
    resolve(1)
  });

  promise.then((result) => {
    console.log(2)
    return result + 2;
  }).then(console.log, console.log(4)).then(console.log(5))

  console.log(7)

}

                                          

