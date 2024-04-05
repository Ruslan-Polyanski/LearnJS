
() => {

  class CoffeeMachine {
    waterAmount = 0; // количество воды внутри
  
    constructor(power) {
      this.power = power;
      console.log( `Создана кофеварка, мощность: ${power}` );
    }
  
  }
  
  // создаём кофеварку
  let coffeeMachine = new CoffeeMachine(100);
  
  // добавляем воды
  coffeeMachine.waterAmount = 200;

}



() => {

  class CoffeeMachine {
    _waterAmount = 0;
  
    set waterAmount(value) {
      if (value < 0) throw new Error("Отрицательное количество воды");
      this._waterAmount = value;
    }
  
    get waterAmount() {
      return this._waterAmount;
    }
  
    constructor(power) {
      this._power = power;
    }
  
  }
  
  // создаём новую кофеварку
  let coffeeMachine = new CoffeeMachine(100);
  
  // устанавливаем количество воды
  coffeeMachine.waterAmount = -10; // Error: Отрицательное количество воды

}



() => {

  class Animal {
    _paws = 0;

    set paws(value) {
      if(value < 2) throw Error('Very few paws');

      this._paws = value;
    }

    get paws() {
      return this._paws;
    }

    constructor(name) {
      this.name = name
    }
  }

  const cat = new Animal('Cat');

  cat.paws = 4;
  cat.paws // 4

}



() => {

  function User(name) {
    this.name = name;
  }

  User.prototype.sayName = function() {
    return this.name;
  }

  const user = new User('Ilona');

  console.dir(user)

  for( const kay in user ) {
    console.log(kay)
  }

}



() => {
//Классы всегда используют use strict
  class User {
    constructor(name) {
      this.name = name;
    }

    sayName() {
      return this.name;
    }
  }

  const user = new User('Lisa');

  console.dir(user)

  Object.getOwnPropertyDescriptors(User.prototype)

  for( const key in user) {
    console.log(key)
  }

}



() => {

  class User{
    name = 'Ilona';

    sayName() {
      return this.name;
    }
  }

  const user = new User();

  console.dir(user)
  console.log(user.sayName())

}


