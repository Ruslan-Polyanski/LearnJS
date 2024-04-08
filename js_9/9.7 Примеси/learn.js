
() => {

  // примесь
  let sayHiMixin = {
    sayHi() {
      alert(`Привет, ${this.name}`);
    },
    sayBye() {
      alert(`Пока, ${this.name}`);
    }
  };



  // использование:
  class User {
    constructor(name) {
      this.name = name;
    }
  }


  // копируем методы
  Object.assign(User.prototype, sayHiMixin);

  // теперь User может сказать Привет
  new User("Вася").sayHi(); // Привет, Вася!

}


() => {

  let sayMixin = {
    say(phrase) {
      alert(phrase);
    }
  };
  
  let sayHiMixin = {
    __proto__: sayMixin, // (или мы можем использовать Object.setPrototypeOf для задания прототипа)
  
    sayHi() {
      // вызываем метод родителя
      super.say(`Привет, ${this.name}`); // (*)
    },
    sayBye() {
      super.say(`Пока, ${this.name}`); // (*)
    }
  };
  
  class User {
    constructor(name) {
      this.name = name;
    }
  }
  
  // копируем методы
  Object.assign(User.prototype, sayHiMixin);

  const user = new User();
  
  // теперь User может сказать Привет
  new User("Вася").sayHi(); // Привет, Вася!

}