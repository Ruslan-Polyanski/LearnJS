
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


() => {

  interface IUser {
    rating: number;
  }

  interface IUser {
    name: string;
    date: number;
  }

  const user: IUser = {
    rating: 15,
    name: 'Ruslo',
    date: 1994,
  }

  interface IStudent extends IUser {
    group: number;
  }

  const ruslo: IStudent = {
    rating: 15,
    name: 'Ruslo',
    date: 1994,
    group: 2,
  }

}


() => {

  interface IUser {
    name: string;
    date: number;
  }

  interface IEditor {
    courses: [string];
    canEdit: boolean;
  }

  interface IAuthor extends IUser, IEditor {
    team: string;
  }

  const ruslo: IAuthor = {
    name: 'Ruslo',
    date: 12,
    courses: ['ehf'],
    canEdit: true,
    team: '12',
  }

}


() => {

  interface IA {
    one: string;
  }

  interface IO {
    two: string;
  }

  type TTogether = IA & IO;

  const exemple: TTogether = {
    one: 'sfdsd',
    two: 'sfdsdf',
  }

}


() => {

  interface IPhone {
    [index:string]: number;
  }

  const myNotePad: IPhone = {
    sadfas: 3,
    sdfsd: 6,
    asdfasf: 7,
    sdfasfd: 9,
  }

}


() => {

  interface IBeep {
    sayBeep: () => string;
  }

  interface IBoop {
    sayBoop: () => string;
  }

  class Boom implements IBeep, IBoop {
    sayBeep: () => 'good';
    sayBoop: () => 'geed';
  }

  const Bo = new Boom();
  Bo.sayBeep()

}


() => {

  interface ICalc {
    sum: (num1: number, num2: number) => number
  }

  class Summa implements ICalc {
    sum(num1, num2) {
      return num1 + num2;
    }

    multiply(num1: number, num2: number) {
      return num1 + num2;
    }
  }

  const calck = new Summa();
  calck.sum(2, 3)

}


() => {

  interface ICalculate {
    sum: (num1: number, num2: number ) => number;
  }
  
  class Summator implements ICalculate {
    sum (num1: string, num2: string) { return num1 + num2 };
  }

}


() => {

  interface ICalculate {
    sum: (num1: number, num2: number) => number;
    multiply? : (num1: number, num2: number) => number;
  }

  class Summator implements ICalculate {
    sum (num1: number, num2: number) { 
      return num1 + num2; 
    }
  }

  const calculator = new Summator();
  calculator.sum(2,3) // 5
  calculator.multiply(2,3)

}


