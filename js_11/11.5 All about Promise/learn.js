
() => {

    function loadScript(src) {
      const script = document.createElement('script');
      script.src = src;
      document.head.append(script)
    }
    
    loadScript('/my/script.js');

    newFunction(); 

}



() => {

  function loadScript(src, callBack) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => callBack(script);
    document.head.append(script)
  }
  
  loadScript('/my/script.js', () => {
    newFunction();
  });

}



() => {

  function myFunc(src, callBack) {
    const script = new Promise((resolve, reject) => {
      setTimeout(() => {resolve(src)}, 3000)
    })

    script.then((value) => {
      callBack(value)
    })
  }

  myFunc('myFile', (script) => {console.log(script)})

}



() => {

  function loadScript(src, callBack) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callBack(null, script);
    script.onerror = () => callBack(new Error('Не удалось загрузить'))
  }

  loadScript('myScript', (error, script) => {
    if(error) {
      // обработка ошибки
    } else {
      // Обрабатываем результат
    }
  })

}



() => {

  loadScript('script-1', (error, script) => {
    if(error) {
      handleError(error)
    } else {
      loadScript('script-2', (error, script) => {
        if(error) {
          handleError(error)
        } else {
          //...
        }
      }
    }
  })

}



() => {

  loadScript('script-1', step1)

  function step1(error, script) {
    if(error) {
      handleError(error)
    } else {
      loadScript('script-2', step2)
    }
  }

  function step2(error, script) {
    if(error) {
      handleError(error)
    } else {
      loadScript('script-2', step3)
    }
  }

}



() => {

  function loadScript(src) {
    return new Promise(function(resolve, reject) {
      let script = document.createElement('script');
      script.src = src;
  
      script.onload = () => resolve(script);
      script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));
  
      document.head.append(script);
    });
  }


  let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

  promise.then(
    script => alert(`${script.src} загружен!`),
    error => alert(`Ошибка: ${error.message}`)
  );

  promise.then(script => alert('Ещё один обработчик...'));

}



() => {

  class Thenable {
    constructor(str) {
      this.str = str;
    }

    then(resolve, reject) {
      alert('resolve')

      setTimeout(() => resolve(this.str + ' - Hallo!!!'))
    }
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('My string'), 0)
  })

  promise.then(result => {
    return new Thenable('Ilona')
  }).then(result => console.log(result))

}



() => {

  const promise = new Promise((res, rej) => {
    res(123)
  })

  promise.then(console.log).then(val => val + 1).then(console.log)

}



() => {

  window.addEventListener('unhandledrejection', (event) => {
    alert('You have a lot of problems :)')
    console.log(event.promise)
    console.log(event.reason)
  })

  new Promise((res, rej) => {
    throw new Error('I mistake')
  })

}



() => {

  const result = Promise.all([
                    Promise.resolve(1),
                    Promise.resolve(2),
                    Promise.resolve(3)
                  ]);

  result.then(res => console.log(res), rej => console.log(rej))   
  
}



() => {

  const result = Promise.all([
    Promise.resolve(1),
    Promise.reject(2),
    Promise.resolve(3)
  ]);

  result.then(res => console.log(res), rej => console.log(rej))

}



() => {

  const result = Promise.allSettled([
    Promise.resolve(1),
    Promise.reject(new Error('I mistake')),
    Promise.resolve(3)
  ]);
  
  result.then(console.log)

}



() => {

  const result = Promise.race([
    new Promise(res => setTimeout(() => {
      res(1)
    }, 3000)),
    Promise.reject(new Error('I mistake')),
    Promise.resolve(3)
  ])

  result.then(res => console.log('I firsth', res), rej => console.log('I second', rej))

}



() => {

  const result = Promise.any([
    // new Promise(res => setTimeout(() => {
    //   res(1)
    // }, 3000)),
    Promise.reject(new Error('I mistake')),
    // Promise.resolve(3)
  ])

  result.then(console.log, console.log)

}


() => {

  const promise = new Promise(res => res(1));
  console.log(promise)
  console.log(2)

}


() => {

  async function returnPromise() {
    return 1;
  }

  console.log(returnPromise().then(r => r))

  console.log(2)

}


() => {

  // Перепишите, используя async/await

  function loadJson(url) {
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
  }

  loadJson('no-such-user.json') // (3)
    .catch(alert); // Error: 404

}


() => {

  async function loadJson(url) {
      const response = await fetch('url');

      if(response.status === 200) {
         return await response.json();
        } 

      throw new Error(response.status);
 
    }

  loadJson('no-such-user.json').catch(alert)

}



