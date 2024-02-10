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
  



  


