
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


