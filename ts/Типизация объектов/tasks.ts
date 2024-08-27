
() => {

  // Реализуйте функцию extract(object, keys), которая возвращает 
  // новый объект c указанными ключами. Например:

  // const user = {
  //   name: 'Tirion',
  //   email: 'tirion@lanister.got',
  //   age: 35,
  // }
  
  // extract(user, ['name', 'age']); // { name: 'Tirion', age: 35 }

  const user = {
    name: 'Tirion',
    email: 'tirion@lanister.got',
    age: 35,
  }

  function extract(object: {[key: string]: any}, keys: string[]): Object {
    const obj: {[key: string]: any} = {};

    for(const item of keys) {
      if(object[item] !== undefined) obj[item] = object[item];
    }
    console.log(obj)
    return obj;
  }
  
  extract(user, ['name', 'age']); 

}


() => {

  // Реализуйте интерфейс EmployeeSalary, где ключом выступает имя (string), 
  // а значением — зарплата (number). Также реализуйте функцию 
  // buildSalaryStatistics(employees: EmployeeSalary): SalaryStatistics, 
  // которая должна возвращать минимальную (поле min), среднюю (поле avg) 
  // и самую высокую (поле max) зарплату.

  interface EmployeeSalary {
    [key: string]: number;
  }

  const employees: EmployeeSalary = {
    mango: 100,
    poly: 50,
    ajax: 150,
  };
  
  employees.ironMan = 1000;

  interface SalaryStatistics {
    min: number;
    max: number;
    avg: number;
  }

  function buildSalaryStatistics(employees: EmployeeSalary) {
    const statistics: {[key: string]: number} = {};
    const arr: number[] = [];

    for(const key in employees) {
      if(!statistics.min) {
        statistics.min = employees[key]
        statistics.max = employees[key]
        arr.push(employees[key])
        continue;
      }

      if(statistics.min > employees[key]) {
        statistics.min = employees[key]
        arr.push(employees[key])
        continue;
      }

      if(statistics.max < employees[key]) {
        statistics.max = employees[key]
        arr.push(employees[key])
        continue;
      }
    }

    statistics.avg = arr.reduce((acc, value) => acc + value) / arr.length;

    return statistics;
  }
  
  buildSalaryStatistics(employees); // { min: 50, max: 1000, avg: 325 }

}