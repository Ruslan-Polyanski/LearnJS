
() => {

  const obj = {};

  console.log(obj.__proto__ === Object.prototype) // true
  console.log(obj.toString === obj.__proto__.toString) // true
  console.log(obj.toString ===  Object.prototype.toString) // true
  console.log(obj.__proto__.toString === Object.prototype.toString) // true

  console.log(Object.prototype.__proto__) // null

}



() => {

  const arr = [1, 2, 3];

  console.log(arr.__proto__ === Array.prototype) // true
  console.log(arr.__proto__.__proto__ === Object.prototype) // true
  console.log(arr.__proto__.__proto__.__proto__ === null) // true  

}



() => {

  function f() {}

  console.log(f.__proto__ === Function.prototype) // true
  console.log(f.__proto__.__proto__ === Object.prototype) // true

}



() => {

  if (!String.prototype.repeat) { 
  
    String.prototype.repeat = function(n) {
      return new Array(n + 1).join(this);
    };
  }
  
  console.log( "La".repeat(3) ); // LaLaLa

}