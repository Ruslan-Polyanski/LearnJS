
console.log({} > 1) // false
console.log([] == {}) // fasle
console.log({} == {}) // false

let obj1 = {name: "John"};
let obj2 = {name: "John"};
console.log(obj1 == obj2); // false

console.log([1,2].toString()) // 1,2
console.log(([1, 2]) == '1,2') // true
console.log(([1, 2]) == 1) // false

console.log(([1,2,3]) == ('1,2,3')) // true