
() => {

  class User {
    constructor(name) {
      this.name = name;
    }
  }

  const user = new User('Ruslan');

  console.log(user instanceof User)

}



() => {

  function User(name) {
    this.name = name;
  }

  const user = new User('Ilona');

  console.log(user instanceof User)

}



() => {

  class User {
    constructor(name) {
      this.name = name;
    }
  }

  class UserOne extends User {

  }

  const userOne = new UserOne('Ruslan');

  console.log(userOne instanceof User)

}



() => {

  class User {
    constructor(name) {
      this.name = name;
    }

    // static [Symbol.hasInstance] (obj) {
    //   if(obj.method) return true;
    // }
  }

  class UserOne extends User {

  }

  const user = new UserOne('Ruslan');
  // user.method = true;

  console.log( user instanceof User )

}