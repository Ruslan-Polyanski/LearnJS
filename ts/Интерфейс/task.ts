
() => {

  // Вам дан интерфейс IVehicle. Задача состоит в том, чтобы на основе 
  // этого интерфейса реализовать класс Car, который будет иметь метод 
  // calcFuelNeeded, принимающий расстояние в километрах и возвращающий 
  // расход топлива на указанную дистанцию. Также у класса Car должна 
  // быть функция-конструктор, которая принимает и реализует свойства, 
  // указанные в интерфейсе.


  interface IVehicle {
    seats: number;
    colour: string;
    canHavePassengers: boolean;
    fuelPer100Kilometers: number;
    calcFuelNeeded(distance:number): number;
  }

  // class Car implements IVehicle {
  //   constructor(
  //     public seats: number,
  //     public colour: string,
  //     public canHavePassengers: boolean,
  //     public fuelPer100Kilometers: number,
  //   ) {}

  //   calcFuelNeeded(distance: number) {
  //     return (this.fuelPer100Kilometers / 100) * distance;
  //   }
  // }

  class Car implements IVehicle {

    seats: number;
    colour: string;
    canHavePassengers: boolean;
    fuelPer100Kilometers: number;

    constructor(seats:number, colour:string, canHavePassengers:boolean, fuelPer100Kilometers:number) {
      this.seats = seats;
      this.colour = colour;
      this.canHavePassengers = canHavePassengers;
      this.fuelPer100Kilometers = fuelPer100Kilometers;
    }

    calcFuelNeeded(distance:number): number {
      return distance / 100 * this.fuelPer100Kilometers;
    }

  }

  const porche = new Car(4, 'red', true, 20);
  console.log(porche.calcFuelNeeded(200)); // 40

}


() => {

  // Вам даны несколько интерфейсов. На их основе создайте интерфейс ISuperman. 
  // ISuperMan должен иметь метод guessWho, принимающий и возвращающий строку.
  // На основе интерфейса ISuperMan создайте объект superMan. Метод guessWho 
  // должен работать следующим образом: если в качестве строки в аргументе 
  // приходит любое значение кроме superman (в любом регистре), 
  // то следует вернуть предположение "It's a ${value}?", 
  // иначе "It's a ${value}!".

  interface IFlying {
    canFly: true;
  }
  
  interface IBird extends IFlying {
    isLiving: true;
  }
  
  interface IPlane extends IFlying {
    canCarryPeople: true;
  }
  
  interface ISuperman extends IBird, IPlane {
    guessWho(item:string): string
  }

  const superMan: ISuperman = {
    canFly: true,
    isLiving: true,
    canCarryPeople: true,
    guessWho(value) {
      return value.toLocaleLowerCase() === 'superman' ? `It's a ${value}!` : `It's a ${value}?`
    }
  }

  // console.log(superMan.guessWho('bird')); // "It's a bird?";
  // console.log(superMan.guessWho('plane')); //"It's a plane?";
  // console.log(superMan.guessWho('superman')); //"It's a superman!";

}



() => {

  // С помощью предоставленного интерфейса IPhonebook и типа Entry 
  // реализуйте класс Phonebook, который представляет телефонный справочник 
  // со следующими свойствами:

  // entries — база данных, объект, записи в котором представляют собой 
  // имена в качестве ключей и телефоны в качестве значений. 
  // Свойство должно быть неизменяемым и доступным только для чтения
  // get — метод, возвращающий телефон по имени
  // set — метод, записывающий имя и телефон в справочник

  type Entry = {
    [key: string]: number
  };
  
  interface IPhonebook {
    get(key: string): number | null
    set(key: string, value: number): void
  }
  
  class Phonebook implements IPhonebook {
    private readonly entries: Entry = {};

    set(key: string, value: number): void {
      this.entries[key] = value;
    }

    get(key: string): number | null {
      return this.entries[key] || null;
    }

  }

  const myNote = new Phonebook();
  myNote.set('help', 911);
  console.log(myNote.get('help'))
  console.log(myNote.get('bell'))

}

