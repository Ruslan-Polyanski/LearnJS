
() => {

  // Написать свой объект, который в цепочке прототипов будет иметь Array.prototype
  // Добавить возможность добавления в функцию конструктор длинны массива

  function MyObjectLikeArray(number) {

    this.length = number ? number : 0;

  }

  MyObjectLikeArray.prototype = {
    constructor: MyObjectLikeArray,
    __proto__: Array.prototype
  };

  MyObjectLikeArray.prototype.sayHello = function() {
    console.log('hello')
  }

  const objOne = new MyObjectLikeArray(100);

  objOne.push('A')
  objOne.push('B')
  objOne.push('C')
  objOne[0]

  console.dir(objOne)

}



() => {

  function MyFucntion() {

  }

  MyFucntion.prototype = {
    constructor: MyFucntion,
    __proto__: Function.prototype
  }

  const myFunc = new MyFucntion();

  console.log(myFunc)

}