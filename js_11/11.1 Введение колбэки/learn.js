
() => {

  function loadScript(src, callBack) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callBack(script);
    document.head.append(script);
  }

  loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', (script) => {
    alert(`Здорово, скрипт ${script.src} загрузился`);
    alert( _ ); // функция, объявленная в загруженном скрипте
  });

}



() => {

  function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Не удалось загрузить скрипт ${src}`));
  
    document.head.append(script);
  }

  loadScript('/my/script.js', function(error, script) {
    if (error) {
      alert(error.message)
    } else {
      alert(`Скрипт ${script.src} загружен`)
    }
  });

}



() => {


  function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Не удалось загрузить скрипт ${src}`));
  
    document.head.append(script);
  }


  loadScript('1.js', function(error, script) {

    if (error) {
      handleError(error);
    } else {
      // ...
      loadScript('2.js', function(error, script) {
        if (error) {
          handleError(error);
        } else {
          // ...
          loadScript('3.js', function(error, script) {
            if (error) {
              handleError(error);
            } else {
              // ...и так далее, пока все скрипты не будут загружены (*)
            }
          });
  
        }
      })
    }
  });

}



() => {

  function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Не удалось загрузить скрипт ${src}`));
  
    document.head.append(script);
  }

  
  loadScript('1.js', step1);

  function step1(error, script) {
    if (error) {
      handleError(error);
    } else {
      // ...
      loadScript('2.js', step2);
    }
  }

  function step2(error, script) {
    if (error) {
      handleError(error);
    } else {
      // ...
      loadScript('3.js', step3);
    }
  }

  function step3(error, script) {
    if (error) {
      handleError(error);
    } else {
      // ...и так далее, пока все скрипты не будут загружены (*)
    }
  };

}