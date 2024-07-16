
// Задание

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