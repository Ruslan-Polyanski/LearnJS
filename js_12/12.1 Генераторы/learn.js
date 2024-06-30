
() => {

  function* generate() {
    console.log('dddd')
    yield 1;
    console.log('dddd')
    yield 2;

    return 3;
  }

 const generateObject = generate();

 console.log(generateObject.next())

}



() => {

  function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  let sequence = [0, ...generateSequence()];
  
  console.log(sequence);

}



() => {

  const objForIterator = {
    first: 1,
    last: 9,

    [Symbol.iterator]: function() {
        return {
          current: this.first,
          last: this.last,
    
          next() {
            if(this.current <= this.last) {
              return {value: this.current++, done: false}
            } else {
              return {done: true}
            }
          }
        }
      }
  }

  for( const value of objForIterator) {
    console.log(value)
  }

}



() => {

  const obj = {
    from: 1,
    to: 9,

    [Symbol.iterator]: function* () {
      for(let value = this.from; value <= this.to; ++value) {
        yield value;
      }
    }

  }

  console.log([0, ...obj])

}



() => {

  function* getNumbers(start, end) {
    for(let i = start; i <= end; i++) {
      yield i;
    }
  }

  const getNumbersObject = getNumbers(1, 5);

  for(let i = 0; i < Infinity; ++i) {
    const {value, done} = getNumbersObject.next();
    if(!done) {
      console.log(value)
    } else {
      console.log(value)
      break;
    }
  }

}



() => {

  function* get() {
    const result = yield 'One value';

    alert(result)
  }

  const gener = get();
  const myOneValue = gener.next().value;

  alert(myOneValue)

  const twoValue = gener.next('Two value');

}



() => {

  // Задачей является создать функцию-генератор pseudoRandom(seed), 
  // которая получает seed и создаёт генератор с указанной формулой.
  // next = previous * 16807 % 2147483647

 function* pseudoRandom(seed) {
    let next = seed;
    for(let i = 0; i < Infinity; i++) {
      yield next = next * 16807 % 2147483647
    }
 }

const generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073

}



() => {

  const obj = {
    first: 1,
    last: 10,

    [Symbol.iterator]: function () {
      return {
        a: this.first,
        b: this.last,
        next: function() {
          if(this.a <= this.b) {
            return {value: this.a++, done: false}
          } else {
            return {done: true}
          }
        }
      }
    }
  }

  console.log([...obj])

}



() => {

  const obj = {
    first: 1,
    last: 10,
    [Symbol.iterator]: function* () {
        for(let i = this.first; i <= this.last; i++) {
          yield i;
        }
    }
  }

  console.log([...obj])

}



() => {

  function* getItem(start, end) {
    for(let i = start; i <= end; ++i) yield i;
  }

  function* parentGenerator() {
    yield* getItem(10, 29)
    yield* getItem(190, 200)
    yield* getItem(300, 310)
  }

  console.log([...parentGenerator()])

}



() => {

  function* generator() {
    const one = yield 'Are you Ruslan ?';
    console.log(one)

    const two = yield 'Are you Arianna ?';
    console.log(two)

    const three = yield 'Are you Lisa';
    console.log(three)

    return false;
  }

  const genObj = generator();

  console.log(genObj.next())
  console.log(genObj.next('Yes'))
  console.log(genObj.next('No'))
  console.log(genObj.next('No'))

}



() => {

  function* generator() {
    try {
      yield 'My coude'
    } catch (error) {
      console.log(error)
    }
  }

  const gen = generator();
    gen.next()

  gen.throw(new Error('my mistake'))

}


() => {

  function* generator() {
      yield 'My coude'
  }

  const gen = generator();
    gen.next()

    try {
      gen.throw(new Error('my mistake'))
    } catch(error) {
       console.log(error)
    }

}



// () => {

//   const obj = {
//     first: 1,
//     last: 9,

//     [Symbol.iterator]: function () {
//       return {
//         first: this.first,
//         last: this.last,
//         next: function() {
//           if(this.first <= this.last) {
//             return {value: this.first++, done: false}
//           }
//           return {done: true}
//         }
//       }
//     }
//   }

//   console.log([...obj])

// }


// () => {

//   const obj = {
//     first: 1,
//     last: 9,
//     [Symbol.iterator]: function* () {
//       for(let i = this.first; i <= this.last; ++i) {
//         yield i;
//       }
//     }
//   }

//   console.log([...obj])

// }