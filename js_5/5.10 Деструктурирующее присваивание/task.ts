
() => {

  type TUser = {
    name: string,
    years: number
    isAdmin?: boolean
  }

  let user: TUser = {
    name: "John",
    years: 30
  };
  
  let { name, years: age, isAdmin = false} = user;

  alert( name ); // John
  alert( age ); // 30
  alert( isAdmin ); // false

};



() => {

  type TSalaries = {
    [key: string]: number 
  }

  type TName = null | string;

  let salaries: TSalaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  function topSalary(salaries: TSalaries): TName {
    let name: TName = null;
    let salary = 0;
  
    for(let [key, value] of Object.entries(salaries)) {
      if(salary < value) {
        [name, salary] = [key, value]
      }
    }
  
    return name;
  }
  
  topSalary(salaries)

}