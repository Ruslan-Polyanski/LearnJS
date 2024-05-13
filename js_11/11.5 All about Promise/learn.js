
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


