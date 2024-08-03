
() => {

  // * Создайте интерфейсы User и Admin.
  // * User должен содержать следующие ключи:
  // * login, email, password, isOnline, lastVisited
  // * Admin содержит все те же ключи, плюс ключ role.
  // * Создайте функцию login, которая принимает один параметр 
  // * в виде объекта с логином и паролем.
  // * Проверьте, что поля не пустые и выведите приветственное сообщение в консоль.

  interface IUser {
    login: string;
    email?: string;
    password: string;
    isOnline?: boolean;
    lastVisited?: Date
  }

  type TAdmin<T> = {
    [Key in keyof T]: T[Key];
  }

  interface IAdmin extends TAdmin<IUser> {
    role?: string;
  }

  const Ruslan: IUser = {
    login: 'Django',
    password: '123456q',
  }

  function login<T extends IAdmin>(key: T): void {
    if(key.login && key.password) {
      console.log('Ooo broo');
    } else {
      console.log('Ooo my...')
    }
  }

  login(Ruslan)

}



() => {

  // * Создайте в двух вариантах (алиасах и интерфейсах) следующую структуру:
  // * Product : price, isNew, isSale, title
  // * Vehicle : wheels, year, brand
  // * Car: type, model +Product, +Vehicle

  type TProduct = {
    price: number;
    isNew: boolean;
    isSale: boolean;
    title: string;
  }

  type TVehicle = {
    wheels: number;
    year: boolean;
    brand: boolean;
  }

  type TCar = {
    type: string;
    model: string;
  } & TProduct & TVehicle;



  type IProduct = {
    price: number;
    isNew: boolean;
    isSale: boolean;
    title: string;
  }

  type IVehicle = {
    wheels: number;
    year: boolean;
    brand: boolean;
  }

  interface Car extends IProduct, IVehicle {
    type: string;
    model: string;
  }

}



() => {

  // * Реализуйте асинхронный вариант функции map() - asyncMap(). Первым аргументом asyncMap() принимает массив 
  // * с Promise. Вторым — функцию, которая применяется к каждому элементу. Функция должна вернуть массив 
  // * с результатами выполнения функции для каждого элемента:

  const promisedNumbers = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

  async function asyncMap<T>(arr: Array<Promise<T>>, callBack: (num: T, index: number) => number) {
     
    const result = await Promise.all(arr);
    const newResult: number[] = [];
    
    for(let i = 0; i < result.length; ++i) {
      const res = callBack(result[i], i);
      newResult.push(res)
    }

    return newResult;
  }

  asyncMap(promisedNumbers, (num, index) => num * index).then((result) => {
    console.log(result); // [0, 2, 6]
  });

}



() => {

  // * Как типизировать функции isAnInternetOrder и isATelephoneOrder
  // * Решение в блоке ниже

  // interface Order {
  //   address: string;
  // }
  
  // interface TelephoneOrder extends Order {
  //   callerNumber: string;
  // }
  
  // interface InternetOrder extends Order {
  //   email: string;
  // }
   
  // type PossibleOrders = TelephoneOrder | InternetOrder | undefined;
   
  // function isAnInternetOrder(order: PossibleOrders) {
  // }
   
  // function isATelephoneOrder(order: PossibleOrders) {
  // }
   
  // function makeOrder(order: PossibleOrders) {
  //   if (isAnInternetOrder(order)) {
  //     console.log(order.email);
  //   } else if (isATelephoneOrder(order)) {
  //     console.log(order.callerNumber);
  //   }
  // }

}



() => {

 // * Решение для кода который находится в блоке выше 

 interface Order {
    address: string;
  }

  interface TelephoneOrder extends Order {
    callerNumber: string;
  }

  interface InternetOrder extends Order {
    email: string;
  }
  
  type PossibleOrders = TelephoneOrder | InternetOrder | undefined;
  
  function isAnInternetOrder(order: PossibleOrders): order is InternetOrder {
      return (order as InternetOrder).email !== undefined;
  }
  
  function isATelephoneOrder(order: PossibleOrders): order is TelephoneOrder {
      return (order as TelephoneOrder).callerNumber !== undefined;
  }
  
  function makeOrder(order: PossibleOrders) {
    if (isAnInternetOrder(order)) {
      console.log(order.email);
    } else if (isATelephoneOrder(order)) {
      console.log(order.callerNumber);
    }
  }

}



() => {

  // * Дана функция head, которая возвращает либо первый символ переданной строки, 
  // * либо первый элемент переданного массива. Приведенные типы функции заведомо 
  // * избыточны. Необходимо переписать их, используя подход перегрузки.

  // * function head(value: string | number[] | boolean[]): string | number | boolean {
  //   * return value[0];
  // * }

  function head(value: string): string;
  function head(value: number[]): number;
  function head(value: boolean[]): boolean;

  function head(value: any): any {
    return value[0];
  }

  head('sdfsdf')
  head([123])
  head([true, false, true])
}



() => {

  // * Практика на дженерики

  type Primitive<T> = T;
  type Tstr = Primitive<string>
  type Tnum = Primitive<number>
  type TisBool = Primitive<true>

  type Obj<T, U> = {
    'name': T;
    'age': U;
  }

  type TObj = Obj<string, number>


  interface User<T> {
    name: string;
    age: T;
  }

  type TUser = User<number>

  const Ruslan: TUser = {
    name: 'Ruslan',
    age: 29
  }

  function Head<T>(value: T[]): T
  function Head(value: any): any {
    return value[0];
  }

  const Head1 = <T>(value: T[]) => value[0];

}


() => {

  // Затипизируйте данную функцию:
  // function append(el, list) {
  //   return list.concat(el)
  // }

  function append<T>(el: T, list: T[]): T[]
  function append(el, list) {
    return list.concat(el)
  }

  append(1, [12, 12])
  append('1', ['1', '3'])
  append(1, ['1']) // Ошибка

}


