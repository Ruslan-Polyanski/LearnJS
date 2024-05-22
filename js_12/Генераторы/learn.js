
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