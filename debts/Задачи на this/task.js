console.log(this)

function getThis() {
  'use strict'
  console.log(this)
}
getThis()

const obj1 = {
  data1: 'rrr',
  getThis1() {
    console.log(this.data1)
  },
  getThis2: () => {
    console.log(this.data1)
  }
}

obj1.getThis1() // rrr
obj1.getThis2() // undefined

function GetSomeObj(name) {
  this.name1 = name;
  this.methodD = function() {
    console.log(this.name1)
  }
  this.methodA = () => {
    console.log(this.name1)
  }
}

const newObj1 = new GetSomeObj('Ruslan');
const a = newObj1.methodD;
const b = newObj1.methodA;
a() // undefided
b() // Ruslan
newObj1.methodD() // Ruslan
newObj1.methodA() // Ruslan

function Person() {
  var that = this;
  that.age = 0;
  setTimeout(function growUp() {
    // Функция с обратным вызовом(callback) содержит переменную that, которая
    // ссылается на требуемый объект this.
    that.age++;
    console.log(that)
  }, 1000);
}

const p = new Person();
console.log(p)

console.log('------')

function Person2() {
  this.age = 0;

  setTimeout(() => {
    this.age++; // `this` указывает на объект Person
    console.log(this)
  }, 1000);
}
console.log()
const p2 = new Person2();
const p3 = new Person2();

function MyFunc(name) {
  this.name5 = name;
  this.method = function() {
    console.log('func1: ', this)
    function newFun(){
      console.log('func2: ', this)
      const myArrowF = () => {
        console.log('func3: ', this)
      }
      myArrowF()
    }
    newFun()
  }
}

const m = new MyFunc('myName');
const mM = m.method();


