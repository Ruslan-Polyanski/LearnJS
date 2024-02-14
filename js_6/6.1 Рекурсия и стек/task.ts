
() => {

  type TUser = {
    name: string;
    salary: number;
  }

  type TDevelopment = {
    sites: TUser[];
    internals: TUser[];
  }

  type TCompany = {
    sales: TUser[];
    development: TDevelopment;
  }

  type TGetSum = (data: TCompany | TUser[] | TDevelopment) => number;

  let company: TCompany = {
    sales: [{ name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
      sites: [{ name: 'Peter', salary: 2000 }, {name: 'Alex', salary: 1800 }],
      internals: [{ name: 'Jack', salary: 1300 }]
    }
  };
  
  const getSum: TGetSum = (data) => {
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


() => {

  function sumTo(n: number): number {
    let sum = 0;
    for(let i = 0; i <= n; ++i) {
      sum += i;
    }
  
    return sum;
  }
  
  console.log(sumTo(100)) // 5050

}


() => {

  function sumTo(n: number): number {
    if(n === 1) {
      return 1;
    }

    return n + sumTo(n - 1);
  }
  
  console.log(sumTo(100)) // 5050

}


() => {

  function sumTo(n: number): number {
    return (n*(n + 1))/2;
  }
  
  console.log(sumTo(100)) // 5050

}


() => {

  const factorial = (n: number): number => {
    if(n === 1) return 1;
  
    return n * factorial(n - 1);
  }
  
  console.log(factorial(5)); // 120

}


() => {

  function fib(n: number): number {
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

  function fib(n: number): number {
    if(n === 0) return 0;
    if(n === 1) return 1;

    return fib(n - 1) + fib(n - 2);
  }
  
  console.log(fib(3)); // 2
  console.log(fib(7)); // 13
  console.log(fib(77)); // 5527939700884757

}


() => {

  type TList = {
    value: number;
    next: TList | null;
  }

  let list: TList = {
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

  function printList(list: TList): void {

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

  type TList = {
    value: number;
    next: TList | null;
  }

  let list: TList = {
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

  function printList(list: TList): void {

    let myObj: TList | null  = list;
  
    while(myObj) {
      console.log(myObj)
      myObj = myObj.next;
    }

  }

  printList(list)

}

() => {

  type TList = {
    value: number;
    next: TList | null;
  }

  let list: TList = {
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

  function printList(list: TList): void {
    const arr: TList[] = [];
    let listItem: TList | null = list;

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

  type TList = {
    value: number;
    next: TList | null;
  }

  let list: TList = {
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

  function printList(list: TList | null): void {
    const listItem = list;

    if(listItem) {
      printList(listItem.next)
    }

    console.log(listItem)
  }

  printList(list)

}





