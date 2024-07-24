
() => {

  const func = (a, b, c) => {
    return a + b + c;
  }

  function carry(func) {
    return function carried(...args) {
      if(args.length >= func.length) {
        return func.apply(this, args);
      } else {
        return function(...args2) {
          return carried.apply(this, [...args, ...args2]);
        }
      }
    };
  }

  const funcCarried = carry(func);
  funcCarried(1)(2)(3)
  funcCarried(3)(2)(1)
  funcCarried(3)(1)(2)
  funcCarried(3, 1)(2)
  funcCarried(3, 1)()()(2)

}

() => {

  const textTime = () => {
    console.log('I show something')
  }

  function debounce(func, waitTime) {
    let timerId = null;

    return function myFucn(...args) {
      clearTimeout(timerId)
      timerId = setTimeout(() => {
        func.apply(this, args)
      }, waitTime)
    }
  }

  const textTimeDebounce = debounce(textTime, 2000);

  let count = 0;

  const timerId = setInterval(() => {
    console.log(count)
    ++count
    textTimeDebounce()
    if(count >= 10) {
      clearTimeout(timerId)
    }
  }, 1000)

}

() => {

  const func = (count) => {
    console.log(`My count ${count}`)
  }

  function throttle(func, time) {
    let isReady = true;
    let lastArgs = [];

    return function funcWithTrottle(...args) {

      if(!isReady) {
        lastArgs = [...args]
        return
      }

      if(isReady) {
        func.apply(this, args)
        isReady = false;
      }

      setTimeout(() => {
        if(lastArgs.length && !isReady) {
          isReady = true;
          funcWithTrottle.apply(this, lastArgs)
          lastArgs = []
        }
      }, time)

    }
  }

  const funcThrottle = throttle(func, 6000);

  let count = 0;

  const timerId = setInterval(() => {
    console.log(count)
    ++count
    funcThrottle(count)
    if(count >= 20) {
      clearTimeout(timerId)
    }
  }, 1000)

}