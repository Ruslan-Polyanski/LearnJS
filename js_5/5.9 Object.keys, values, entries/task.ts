
() => {

  type TSalaries = {
    [key: string]: number
  }
  
  const salaries: TSalaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  type TSumSalaries = (salaries: TSalaries) => number;
  
  const sumSalaries: TSumSalaries = (salaries) => {
      let result = 0;
  
      for (let value of Object.values(salaries)) {
        result += value;
      }
  
      return result;
  }; 
  
  sumSalaries(salaries)

};


() => {

  type TUser = {
    name: string,
    age: number,
  }

  let user: TUser = {
    name: 'John',
    age: 30
  };

  function count(obj: TUser): number {
    return Object.keys(obj).length;
  }

  alert( count(user) ); // 2

}


