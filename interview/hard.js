
() => {

  // Сколько будет логов и какие значения они примут?

  function createLogger(initialValue) {
    let value = initialValue;

    return function(logMessage) {
      console.log(logMessage, value);
      value++;
    };
  }

  const logger = createLogger(5);

  const num = 5;
  let result = 10;

  if (num > 3 && num < 7) {
    result += num ?? 0;
    logger("Log 1:");
  } else {
    result = 15;
    logger("Log 2:");
  }

  for (let i = 0; i < 3; i++) {
    result -= i;
    logger("Log 3:");
  }

  let count = 0;
  while (count < 2) {
    result *= count ? 2 : 1;
    count++;
    logger("Log 4:");
  }

  do {
    result /= 2;
    logger("Log 5:");
  } while (result > 5);

}



() => {

// Сколько будет логов и какие значения они примут?

  function outerFunction(x) {
    let outerVar = x;
    console.log("Log 1:", outerVar);

    return function innerFunction(y, callback) {
      let innerVar = y;
      console.log("Log 2:", outerVar + innerVar);

      callback(() => {
        outerVar += innerVar;
        console.log("Log 3:", outerVar);
      });
    };
  }

  const myCallback = (cb) => {
    cb();
    console.log("Log 4:", "Callback executed");
  };

  const resultFunction = outerFunction(5);
  resultFunction(3, myCallback);

  ((z) => {
    console.log("Log 5:", z);
  })(10);

}


