
() => {

  function myHardFunc(num) {
    let result = null;
  
    for(let i = num; i < 100000000; ++i) {
      ++result
    }
  
    return result;
  }
  
  
  function cashDecorator(func) {
    const cashMap = new Map();
  
    return function(num) {
      if(cashMap.has(num)) return cashMap.get(num);
  
      const result = func(num);
      cashMap.set(num, result)
  
      return result;
    }
  
  }
  
  myHardFunc = cashDecorator(myHardFunc);
  
  myHardFunc(100)
  myHardFunc(500)
  myHardFunc(700)

}



() => {

  let worker = {
    method() {
      return 2;
    },
  
    myHardFunc(num) {
      return num * this.method();
    }
  };

  function cashDecorator(func) {
    const cashMap = new Map();

    return function(num) {
        if(cashMap.has(num)) return cashMap.get(num);

        const result = func.call(this, num);
        cashMap.set(num, result)

        return result;
    }
  }

  worker.myHardFunc = cashDecorator(worker.myHardFunc);

  worker.myHardFunc(100)

}
