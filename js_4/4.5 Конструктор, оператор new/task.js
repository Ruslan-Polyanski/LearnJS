function User(name) {
  // this = {};  (неявно)

  // добавляет свойства к this
  this.name = name;
  this.isAdmin = false;

  // return this;  (неявно)
}

let user = {
  name: "Jack",
  isAdmin: false
};

// создаём функцию и сразу же вызываем её с помощью new
let user1 = new function() {
  this.name = "John";
  this.isAdmin = false;

  // ...другой код для создания пользователя
  // возможна любая сложная логика и инструкции
  // локальные переменные и так далее
};


function User1() {
  alert(new.target);
}

// без "new":
User1(); // undefined

// с "new":
new User1(); // function User { ... }


function User3(name) {
  if (!new.target) { // в случае, если вы вызвали меня без оператора new
    return new User3(name); // ...я добавлю new за вас
  }

  this.name = name;
}

let john = User3("John"); // переадресовывает вызов на new User
alert(john.name); // John

const commonObj = {
  name: 'common',
}

function A() { 
  return commonObj;
}

function B() { 
  return commonObj;
}

let a = new A();
let b = new B();

alert( a == b ); // true



function Calculator() {
  // this.a = 0;
  // this.b = 0;

  this.read = function(){
    this.a = +prompt('add number one', 0);
    this.b = +prompt('add number two', 0);
  };

  this.sum = function(){
    return this.a + this.b;
  };

  this.mul = function(){
    return this.a * this.b;
  };

}


function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    const newNumber = +prompt('add new number', 0);
    this.value += newNumber;
  }
}




