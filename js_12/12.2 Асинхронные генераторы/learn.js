
() => {

  // Асинхронные итераторы

  const obj = {
    first: 1,
    last: 10,
    [Symbol.asyncIterator]: function () {
      return {
        start: this.first,
        end: this.last,

        async next() {
          await new Promise(resolve => setTimeout(resolve, 2000))

          if(this.start <= this.end) {
            return {value: this.start++, done: false}
          } else {
            return { done: true }
          }

        }
      }
    }
  }

(async () => {
    for await (const item of obj) {
      console.log(item)
    }
  })();

}



() => {

  // Асинхронные генераторы

  const obj = {
    first: 1,
    last: 10,
    [Symbol.asyncIterator]: async function* () {
      for(let i = this.first; i <= this.last; i++) {
        await new Promise(resolve => setTimeout(resolve, 2000))
        yield i;
      }
    }
  }

  (async () => {
    for await (const item of obj) {
      console.log(item)
    }
  })();

}