
() => {

  const user = {
    get propName() {
      // user.propName
    },
    set propName(value) {
      // user.propName = value;
    }
  };

}



() => {

    const user = {
      name: 'Lisa',
      surname: 'Maya',

      get fullName() {
        // user.fullName
        return this.name + ' ' + this.surname;
      },

      set fullName(value) {
        // user.fullName = 'something';
        [this.name, this.surname] = value.split(' ');
      }

    };

    user.fullName

    for( const key in user) {
      console.log(key)
    }

    user.fullName = 'LISA MAYA';

    user

    Object.getOwnPropertyDescriptor(user, 'fullName')

}



() => {

  const user = {
    name: "Jone",
    surname: "Below",
  }

  Object.defineProperty(user, 'fullName', {
    get() {
      return this.name + " " + this.fullName;
    },

    set(value) {
      [this.name, this.surname] = value.split(' '); 
    }
  })

  user

  for (const key in user) {
    console.log(key)
  }

  Object.getOwnPropertyDescriptor(user, 'fullName')

}



() => {

  const user = {
    get name() {
      return this._name;
    },

    set name(value) {
      if(value.length < 5) {
        alert('Very shot name')
        return;
      }
      this._name = value;
    }
  };

  user.name = 'longName';

  user

}



() => {

  function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    Object.defineProperty(this, 'age', {
      get() {
        return new Date().getFullYear() - this.birthday.getFullYear();
      }
    })
  }

  let john = new User('John', new Date(1984, 4, 15))

  john.birthday
  john.age

}



