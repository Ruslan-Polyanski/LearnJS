'use strict';
// Как работает наследование (теория) ----------------------------
let a = {};
a.toString(); // a.__proto__ => Object.prototype = { toString(){} }

function Aboba() {}

Aboba.prototype.hi = function () {
    console.log('privet');
};

let maxim = new Aboba();
maxim.hi(); // "privet" maxim.__proto__ => Aboba.prototype = { hi(){} }

// ----------------------------------------------------------
const prototype = { aboba: 123 };
const obj = Object.create(prototype);

console.log(obj.hasOwnProperty('aboba')); // false
console.log(obj.aboba); // 123

obj.aboba = 321;
console.log(obj.hasOwnProperty('aboba')); // true
console.log(obj.aboba); // 321

//---------------------------------------------------------
function Aboba() {}

console.log(Aboba.prototype.constructor === Aboba);

// Baza ----------------------------------------------------
let aboba = { name: 'aboba' };
console.log(aboba.prototype); //
console.log(aboba.__proto__); //

let numbers = [1, 2, 3];
console.log(numbers.prototype); //
console.log(numbers.__proto__); //

class MaxLox {}
console.log(MaxLox.prototype); //
console.log(MaxLox.__proto__); //

let abobus = new MaxLox();
console.log(abobus.prototype); //
console.log(abobus.__proto__); //

let abobus1 = new MaxLox();
let abobus2 = new MaxLox();
console.log(abobus1.__proto__ === abobus2.__proto__); // 

let Component2 = (props) => {
    return 'I dont know Prototype';
};
console.log(Component2.prototype); //
console.log(Component2.__proto__); //

class Aboba {
    constructor(name = 'aboba') {
        this.name = name;
    }
}

let amogus = new Aboba();
console.log(amogus.__proto__.__proto__ === 'Чему');
console.log(amogus.__proto__.constructor.__proto__ === 'Чему')
console.log(amogus.__proto__.__proto__.__proto__ === 'Чему')

// Тестик для закрепления -----------------------------------------------
// 1
console.log({}.prototype === {}.__proto__);

// 2
function Aboba() {}
console.log(Aboba.prototype === Aboba.__proto__);

// 3-4
function Aboba() {}
function Aboba2() {}
console.log(Aboba.__proto__ === Aboba2.__proto__);
console.log(Aboba.prototype === Aboba2.prototype);

// 5
let Component = (props) => {
    return 'I dont know Prototype';
};
console.log(Component.prototype === Object.prototype);

// 6-7
let age = 18;
console.log(age.prototype === Number.prototype);
console.log(age.__proto__ === Number.prototype);

// 8
class Hacker {}
console.log(Hacker.__proto__ === Function.prototype);

// 9
function Aboba() {}
console.log(Aboba.__proto__ === 'Чему');

// 10
const count = 12;
console.log(count.__proto__ === 'Чему');

