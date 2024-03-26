

() => {

  // Внутри класса всегда use strict

  class User {
    constructor(name) {
      this.name = name;
    }

    sayHi() {
      console.log(this.name)
    }
  }

  const user1 = new User('Lisa');

  user1.sayHi()

  console.log(user1)
  console.log(typeof User)

}



() => {

  function User(name) {
    this.name = name;
  }

  User.prototype.sayHi = function() {
    console.log(this.name)
  }

  const user1 = new User('Lisa');

  user1.sayHi()

  console.log(user1)
  console.log(typeof User)

}



() => {

  // Class Expression

  const User = class {
    constructor(name) {
      this.name = name;
    }
  }

}



() => {

  // Named Function Expression

  const User = class MyUser {
    constructor(name) {
      this.name = name;
    }

    sayHi() {
      console.log(MyUser) 
    }
  }

  new User('Lisa').sayHi() // MyUser

  console.log(MyUser) // Error

}



() => {

  function makeClass(words) {
    return class {
      sayHi() {
        console.log(words)
      }
    }
  }

  const MyClass1 = makeClass('Hello');

  new MyClass1().sayHi() // 'Hello'

}



() => {

  class User {

    get name() {
      return this._name;
    }

    set name(name) {
      if(name.length < 3) {
        console.log('Error')
        return;
      } 

      this._name = name;
    }
  }

  const user1 = new User('Ila');

}



() => {

  class User {
    constructor(name) {
      this.name = name;
    }
  }

  Object.defineProperties(User.prototype, {
    name: {
      get() {
        return this.name;
      },
      set(name) {
        this.name = name;
      }
    }
  })

}


() => {

  class User {
    name = 'MyName';

    seyHi() {
      console.log(this.name)
    }
  }

  const user = new User();

  user.seyHi()

}