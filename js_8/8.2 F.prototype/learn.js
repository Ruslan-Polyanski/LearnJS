
() => {

  const newObj = {
    name: 'newObj'
  }

  function F(name) {
    this.name = name;
  }

  F.prototype = newObj;

}


() => {

  const animal = {
    name: 'animal'
  }

  const animal2 = {
    name: 'animal2'
  }

  function Rabbit(name) {
    this.name = name;
  }

  Rabbit.prototype = animal;

  const rabbit = new Rabbit('rabbit');

  rabbit.__proto__ === animal // true


  Rabbit.prototype = animal2;

  const rabbit2 = new Rabbit('rabbit2');

  rabbit2.__proto__ === animal2 // true

}


() => {

  function Rabbit(name) {
    this.name = name;
  }

  const rabbit = new Rabbit('rabbit');

  Rabbit.prototype.constructor === Rabbit
  Rabbit === rabbit.__proto__.constructor
  Rabbit.prototype.constructor === rabbit.__proto__.constructor

}



() => {

  function Rabbit(name) {
    this.name = name;
    console.log(name);
  }
  
  const rabbit = new Rabbit("White Rabbit");
  
  const rabbit2 = new rabbit.constructor("Black Rabbit");

}



() => {

  function Rabbit() {}

  Rabbit.prototype = {
    jumps: true
  };

  const rabbit = new Rabbit();

  console.log(rabbit.constructor === Rabbit); // false

}


() => {

  function Rabbit() {}

  Rabbit.prototype.jumps = true // дописали свойство в прототип

  // Перезаписали все свойство прототип, но дописали
  // свойство constructor для возможности получения ссылки на
  // него в другом оъекте
  Rabbit.prototype = {
    jumps: true,
    constructor: Rabbit
  }

}