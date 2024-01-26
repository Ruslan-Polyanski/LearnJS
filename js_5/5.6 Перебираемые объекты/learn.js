
() => {

  const range = {
    from: 1,
    to: 5
  };
  
  
  range[Symbol.iterator] = function() {
    return {
      current: this.from,
      last: this.to,
      next() {
        return this.current >= this.last 
               ? { done: true } 
               : { done: false, value: this.current++ }
      }
    };
  }
  
  for (let num of range) {
    alert(num);
  }

};



() => {

  const str = 'Hello';

  const iterator = str[Symbol.iterator]();

  while(true) {
    const result = iterator.next();

    if(result.done) break;

    alert(result.value)
  }

};


