
const obj = {
  from: 0,
  to: 10,
};

obj[Symbol.iterator] = function() {
  return {
    current: this.from,
    last: this.to,

    next() {
      if(this.current < this.last) {

        if(this.current % 2 === 0) {
          ++this.current;
        } 

        return {done: false, value: this.current++};

      } else {
        return {done: true}
      }
    }
  }
}

for (const item of obj) {
  console.log(item)
}