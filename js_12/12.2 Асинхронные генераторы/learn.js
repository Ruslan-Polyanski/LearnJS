
() => {

  // Асинхронные итераторы

  // const obj = {
  //   first: 1,
  //   last: 10,
  //   [Symbol.asyncIterator]: function () {
  //     return {
  //       start: this.first,
  //       end: this.last,

  //       async next() {
  //         await new Promise(resolve => setTimeout(resolve, 2000))

  //         if(this.start <= this.end) {
  //           return {value: this.start++, done: false}
  //         } else {
  //           return { done: true }
  //         }

  //       }
  //     }
  //   }
  // }

// (async () => {
//     for await (const item of obj) {
//       console.log(item)
//     }
//   })();


const obj = {
  from: 1,
  to: 5,

  [Symbol.asyncIterator]() {
    return {
      curent: this.from,
      last: this.to,
      async next() {
        await new Promise(res => setTimeout(res, 1000))

        if(this.curent <= this.last) {
          return {done: false, value: this.curent++};
        } else {
          return {done: true};
        }
      }
    }
  }

};

(async () => {

  for await (const value of obj) {
    console.log(value);
  }

})();


}



() => {

  // Асинхронные генераторы

  const obj = {
    first: 1,
    last: 10,
    async *[Symbol.asyncIterator]() {
      for(let i = this.first; i <= this.last; i++) {
        await new Promise(resolve => setTimeout(resolve, 2000))
        yield i;
      }
    }
  };

  (async () => {
    for await (const item of obj) {
      console.log(item)
    }
  })();

}
