
const obj = {
  from: 1,
  to: 11,
};

obj[Symbol.iterator] = function() {
  return {
    current: this.from,
    last: this.to,

    next() {
      if(this.current < this.last) {

          for(let i = this.current; i <= this.last; ++i) {

            if(this.current % 2 !== 0) {
              return {done: false, value: this.current++};
            } 
    
            ++this.current;
          }

        }
       else {
         return {done: true}
      }
    }
  }
}

for( let num of obj ) {
  console.log(num)
}