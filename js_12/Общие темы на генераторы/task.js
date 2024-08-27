
() => {

  const obj = {
    from: 1,
    to: 10,
    [Symbol.iterator]() {
      return {
        firstNum: this.from,
        lastNum: this.to,
        next() {
          if(this.firstNum <= this.lastNum) {
            return {value: this.firstNum++, done: false};
          } else {
            return {value: this.firstNum, done: true};
          }
        }
      }
    }
  }
  
  for(const item of obj) {
    console.log(item)
  }

}



() => {

  const obj = {
    from: 1,
    to: 10,
    *[Symbol.iterator]() {
      for(let i = this.from; i <= this.to; ++i) {
        yield i;
      }
    }
  }

  for(const item of obj) {
    console.log(item)
  }

}



() => {

  const obj = {
    from: 1, 
    to: 10,
    [Symbol.asyncIterator]() {
      return {
        firstNum: this.from,
        lastNum: this.to,
        async next() {
          await new Promise(res => setTimeout(() => res(), 1000)).then(item => item);
          if(this.firstNum <= this.lastNum) {
            return {value: this.firstNum++, done: false}
          } else {
            return {value: this.firstNum, done: true}
          }
        }
      }
    }
  }

  for await (const item of obj) {
    console.log(item)
  }

}



() => {

  const obj = {
    from: 1,
    to: 10,
    async *[Symbol.asyncIterator]() {
      for (let i = this.from; i <= this.to; ++i) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        yield i;
      }
    }
  }

  for await (const item of obj) {
    console.log(item)
  }

}



() => {

  function* gen() {
    yield [1, 2, 3, 4, 5]
    yield [10, 20, 30, 40, 50]
    yield [100, 200, 300, 400, 500]
  }

  const generator = gen();

  console.log([...generator])
  
}



() => {

  function* gen() {
    yield* [1, 2, 3, 4, 5]
    yield* [10, 20, 30, 40, 50]
    yield* [100, 200, 300, 400, 500]
  }

  const generator = gen();
  
  console.log([...generator])
  
}