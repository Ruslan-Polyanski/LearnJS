// Объект пользователя
let user = {
  name: "John",
  age: 30
};
user.sayHi = function() {
  alert("Привет!");
};
user.sayHi(); // Привет!


let user = {
  name: "John",
  age: 30,
  sayHi() {
    alert( user.name ); // приведёт к ошибке
  }
};
let admin = user;
user = null; // перезапишем переменную для наглядности, теперь она не хранит ссылку на объект.
admin.sayHi(); // TypeError: Cannot read property 'name' of null



function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Каким будет результат?


function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}

let user = makeUser();

alert( user.ref().name ); // John


let calculator = {
  a: 0,
  b: 0,
  
  read() {
    let newA = +prompt(this.a, 0);
    let newB = +prompt(this.b, 0)
    this.a = newA;
    this.b = newB;
  },

  sum() {
    const result = this.a + this.b;
    return result;
  },

  mul() {
    const result = this.a * this.b;
    return result;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
    return this;
  }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0

