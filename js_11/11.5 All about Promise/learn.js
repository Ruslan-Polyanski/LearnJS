
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




