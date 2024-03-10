
// Флаги и дескрипторы свойств
// Свойство имеет 
//  - value
//  - writable true / false
//  - enumerable true / false
//  - configurable true / false



() => {

  const obj = {
    name: 'Liana',
  }
  
  let descriptor = Object.getOwnPropertyDescriptor(obj, 'name');
  
  descriptor

}



() => {

  Object.defineProperty(obj, propertyName, descriptor)

  // Если какой либо флаг при запуске данного метода не указан для не существующего свойства
  // то данный флаг будет создан со значением false

}



() => {

  const user = {};

  Object.defineProperty(user, 'name', {
    value: 'Lola',
    writable: true,
  })

  let descriptor = Object.getOwnPropertyDescriptor(user, 'name')

  descriptor

  Object.defineProperty(user, 'name', {
    writable: false,
  })

  descriptor = Object.getOwnPropertyDescriptor(user, 'name')

  descriptor

}



() => {

  'use strict'

  const user = {
    name: 'Inna',
  }

  Object.defineProperty(user, 'name', {
    writable: false,
  })

  user.name = 'Lola'; // В обычном режиме, свойство присвоено не будет, просто
  // js проигнорирует команду присваивания не показав ни каках ошибок
  // Однако если мы поставим режим 'use strict' то будет сообщение об ошибке

  user.name

}



() => {

  'use strict'

  const user = {};

  Object.defineProperty(user, 'name', {
    value: 'Nina',
    enumerable: true,
    configurable: true,
  })

  user.name = 'Lisa'

}



() => {

  const user = {
    name: 'lola',
  }

  console.log(user.toString())
}



() => {

  const user = {
    name: 'lisa',
    toString() {
      return this.name;
    }
  }

  for(const key in user) {
    console.log(key)
  }

  Object.defineProperty(user, 'toString', {
    enumerable: false
  })

  for(const key in user) {
    console.log(key)
  }

  const keysArr = Object.keys(user)

  console.log(keysArr)

}



() => {

  let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

  alert( JSON.stringify(descriptor, null, 2 ) );

  /*
  {
    "value": 3.141592653589793,
    "writable": false,
    "enumerable": false,
    "configurable": false
  }
  */

}



() => {

  'use strict'

  let user = {
    name: "John"
  };
  
  Object.defineProperty(user, "name", {
    writable: false,
    configurable: false
  });
  
  // теперь невозможно изменить user.name или его флаги
  // всё это не будет работать:
  user.name = "Pete";
  delete user.name;
  Object.defineProperty(user, "name", { value: "Pete" });

}


() => {

  const user = {}

  const userLinkOne = Object.defineProperty(user, 'name', {
    value: 'Lisa',
    writable: true,
    enumerable: true,
    configurable: false,
  })

  console.log(userLinkOne)

  const userLinkTwo = Object.defineProperties(user, {
    age: {
      value: 26,
      writable: true,
      enumerable: true,
      configurable: false,
    },
    job: {
      value: 'top meneger',
      writable: true,
      enumerable: true,
      configurable: false,
    }
  })

  console.log(userLinkTwo)

  for(const key in user) {
    console.log(key)
  }

  const descriptors =  Object.getOwnPropertyDescriptors(user)

  descriptors

  const cloneUser = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));

  cloneUser === user

  // Обычное копирование освойств объектов не копирует дескрипторы этих свойств
  // Копирование объектов через Object.defineProperties копирует и дескрипторы

  // Цикл for..in не видит символьные и неперечисляемые свойства
  // Object.getOwnPropertyDescriptors возвращает все собственные свойства, в том числе и
  // не перечисляемые

}



() => {

  'use strict'

  const user = {
    name: 'Lisa',
  }

  Object.preventExtensions(user)
  // Запрещает добавлять новые свойства в объект.

  user.age = 26;

  delete user.name

  user

}