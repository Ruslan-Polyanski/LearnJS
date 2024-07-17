
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


