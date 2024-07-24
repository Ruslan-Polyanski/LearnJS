
() => {

  const target = {
    name: 'Ruslan',
    weght: 76.5,
  }

  let proxy = new Proxy(target, {
    get(target, property, receiver) {
      
    }
  })

}

() => {

  let numbers = ['one', 'two', 'three'];

  numbers = new Proxy(numbers, {
    get(target, property, receiver) {
      if(property in target) {
        return target[property];
      } 
      return 0;
    }
  })

  console.log(numbers[1])
  console.log(numbers[5])

}

() => {

  let dictionary = {
    'Hello': 'Hola',
    'Bye': 'Adiós'
  };

  dictionary = new Proxy(dictionary, {
    get(target, property, receiver) {
      if(property in target) return target[property];
      return property;
    }
  })

  console.log( dictionary['Hello'] );
  console.log( dictionary['Welcome to Proxy']);     

}

() => {

  let numbers = [1, 3, 4];

  numbers = new Proxy(numbers, {
    set(target, property, value, receiver) {
      if(typeof value === 'number') {
        target[property] = value;
        return true;
      }
      return false;
    }
  })

  numbers.push(1);
  numbers.push(2);
  numbers.push('sdfsd');

}

() => {

  const user = {
    name: 'Ruslan',
    weight: 76.5,
    symbol: Symbol('id-1 in User'),
  }

  Object.setPrototypeOf(user, {
    age: 27,
    symbol: Symbol('id-2 in User.__proto__'),
  })

  for( const key in user) {
    console.log(user[key])
  }

  Object.keys(user)

}

() => {

  let user = {
    name: 'Ruslan',
    _pass: '123456'
  }

  user = new Proxy(user, {
    ownKeys(target) {
      return Object.keys(target).filter(key => !key.startsWith('_'))
    }
  })

  for(let key in user) console.log(key);

}

() => {

  let range = {
    start: 1,
    end: 10,
  } 

  range = new Proxy(range, {
    has(target, property) {
      return property >= target.start && property <= target.end;
    }
  })

  console.log(5 in range); // true
  console.log(50 in range); // false

}