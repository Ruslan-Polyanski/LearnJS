
// let timerId = setTimeout(func|code, [delay], [arg1], [arg2])

function sayHi() {
  alert('Привет');
}

setTimeout(sayHi, 1000);


function sayHi(phrase, who) {
  alert( phrase + ', ' + who );
}

setTimeout(sayHi, 1000, "Привет", "Джон"); // Привет, Джон

setTimeout("alert('Привет')", 1000);

setTimeout(() => alert('Привет'), 1000);


let timerId = setTimeout(() => alert("ничего не происходит"), 1000);
alert(timerId); // идентификатор таймера

clearTimeout(timerId);
alert(timerId);


let timerId2 = setInterval(func|code, [delay], [arg1], [arg2]);

() => {

  let timerId = setTimeout(function tick() {
    console.log('tick');
    timerId = setTimeout(tick, 2000);
  }, 2000)

  setTimeout(() => {
    clearTimeout(timerId)
  }, 10000)

}


// () => {

//   let delay = 5000;

//   let timerId = setTimeout(function request() {
//     ...отправить запрос...
  
//     if (ошибка запроса из-за перегрузки сервера) {
//       // увеличить интервал для следующего запроса
//       delay *= 2;
//     }
  
//     timerId = setTimeout(request, delay);
  
//   }, delay);

// }


() => {

  const obj = {
    name: 'obj',
    func() {
      console.log(this)
      const myThis = this;
      const myVar = 'context';
      setTimeout(function() {
        console.log(myVar);
        (() => {
          console.log(this)
        })()
      }, 1000)
    }
  }
  
  obj.func()

}



() => {

  let start = Date.now();
  let times = [];
  
  setTimeout(function run() {
    times.push(Date.now() - start)
  
    if(start + 100 < Date.now()){
      alert(times)
    } else {
      setTimeout(run);
    }
  })

}



