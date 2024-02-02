
// Деструктурирующее присваивание
// Напишите деструктурирующее присваивание, которое:
// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

let user = {
  name: "John",
  years: 30
};

let { name, years: age, isAdmin = false} = user;

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false



// Максимальная зарплата
// У нас есть объект salaries с зарплатами:
// Создайте функцию topSalary(salaries), которая возвращает имя самого 
// высокооплачиваемого сотрудника.
// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
  let [name, salary] = [null, 0];

  for(let [key, value] of Object.entries(salaries)) {
    if(salary < value) {
      [name, salary] = [key, value]
    }
  }

  return name;
}

topSalary(salaries)