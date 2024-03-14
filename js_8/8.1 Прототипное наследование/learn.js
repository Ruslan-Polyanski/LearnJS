
() => {

  const user = {
    age: null,
    name: null,
  }

  const admin = {
    isLogin: true,
  }

  admin.__proto__ = user;

  console.log(admin.isLogin)
  console.log(admin.age)

  // При отсутствии свойства в объекте, поиск этого свойства происходит
  // по цепочке прототипов

}



() => {

  const animal = {
    eats: true,
    walk() {
      console.log('Alimal walk')
    }
  }

  const rabbit = {
    jumps: true,
    __proto__: animal,
  }

  rabbit.walk()

  // Метод будет взят у прототипа

}



() => {

  const animal = {
    eats: true,
    walk() {
      console.log('animal')
    }
  }

  const rabbit = {
    __proto__: animal,
  }

  rabbit.walk = function() {
    console.log('rabbit')
  }

  rabbit.walk()

  // Свойство берется у самого объекта, но если бы этого свойства 
  // у него не было, то он бы тащил его из прототипа

}



() => {

  const user = {
    name: 'Arianna',
    surname: 'Ruslanovna',

    get fullName() {
      return this.name + ' ' + this.surname;
    },

    set fullName(value) {
      [this.name, this.surname] = value.split(' ');
    }
  }

  const admin = {
    __proto__: user
  }

  console.log(admin.fullName)

  admin.fullName = 'ARIANNA RUSLANOVNA';

  console.log(admin.fullName)

}



() => {

  const animal = {
    walk() {
      if (!this.isSleeping) {
        alert(`I walk`);
      }
    },

    sleep() {
      this.isSleeping = true;
    }
  };

  const rabbit = {
    __proto__: animal,
  }

  rabbit.sleep() // добавляет свойсвто isSleeping в rabbit
  rabbit.isSleeping // true
  animal.isSleeping // undefined

}



() => {

  const animal = {
    eats: true
  };

  const rabbit = {
    jumps: true,
    __proto__: animal,
  }

  Object.keys(rabbit) // Выведет только jumps

  for (let key in rabbit) {
    console.log(key)
  }

}