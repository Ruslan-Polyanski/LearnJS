
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