
() => {

  interface IUser {
    firstName: string;
    poinsCount: number;
  }
  
  const user: IUser = {
    firstName: 'Mark',
    poinsCount: 100,
  }

}


() => {

  type TUser = {
    firstName: string;
    poinsCount: number;
  }
  
  const user: TUser = {
    firstName: 'Mark',
    poinsCount: 100,
  }

}


() => {

  interface ICountable {
    count(): number
  }

  class ShoolClass implements ICountable {
    count(): number {
      return 5;
    }
  }

  const sc = new ShoolClass()

}


