
() => {

  class Animal {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }

    run(speed) {
      this.speed = speed;
      alert(`${this.name} бежит со скоростью ${this.speed}.`);
    }

    stop() {
      this.speed = 0;
      alert(`${this.name} стоит неподвижно.`);
    }

  }
  
  let animal = new Animal("Мой питомец");


  class Rabbit extends Animal {

    hide() {
      alert(`${this.name} прячется!`);
    }

    hideStop() {
      // setTimeout(() => super.stop(), 1000); // вызывает родительский stop после 1 секунды
      setTimeout(function() { super.stop() }, 1000);
    }

  }


  let rabbit = new Rabbit("Белый кролик");

  Rabbit.prototype.__proto__ === Animal.prototype // true


}