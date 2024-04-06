
() => {

  class PowerArray extends Array {
    isEmpty() {
      return this.length === 0;
    }
  }
  
  let arr = new PowerArray(1, 2, 5, 10, 50);
  alert(arr.isEmpty()); // false
  
  let filteredArr = arr.filter(item => item >= 10);
  alert(filteredArr); // 10, 50
  alert(filteredArr.isEmpty()); // false

}



() => {

  class PowerArray extends Array {
    isEmpty() {
      return this.length === 0;
    }
  
    // встроенные методы массива будут использовать этот метод как конструктор
    static get [Symbol.species]() {
      return Array;
    }
  }
  
  let arr = new PowerArray(1, 2, 5, 10, 50);
  alert(arr.isEmpty()); // false
  
  // filter создаст новый массив, используя arr.constructor[Symbol.species] как конструктор
  let filteredArr = arr.filter(item => item >= 10);
  
  // filteredArr не является PowerArray, это Array
  alert(filteredArr.isEmpty()); // Error: filteredArr.isEmpty is not a function

}