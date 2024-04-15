
() => {

  const promise = new Promise(function(resolve, reject) {
    //... делаем что - то
  })

}



() => {

  let promise = new Promise(function(resolve, reject) {
    // эта функция выполнится автоматически, при вызове new Promise
  
    // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
    setTimeout(() => resolve("done"), 1000);
  });

}



() => {

  let promise = new Promise(function(resolve, reject) {
    // спустя одну секунду будет сообщено, что задача выполнена с ошибкой
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  });

}



() => {

  console.log(0)

  const promise = new Promise((resolve, reject) => {
    resolve(1)
    console.log(11)
  })

  promise.then((value) => {
    console.log(value)
  })

  console.log(2)

}



() => {

  promise.then(
    function(result) { /* обработает успешное выполнение */ },
    function(error) { /* обработает ошибку */ }
  );

}



() => {

  let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
  });
  
  // resolve запустит первую функцию, переданную в .then
  promise.then(
    result => alert(result), // выведет "done!" через одну секунду
    error => alert(error) // не будет запущена
  );

}



() => {

  new Promise((resolve, reject) => {
    setTimeout(() => resolve("value"), 2000);
  })
    .finally(() => alert("Промис завершён")) 
    // finally срабатывает первым, не принимает аргументы, 
    // пропускает резултат дальше, не знает как завершился промис
    .then(result => alert(result)); // <-- .then показывает "value"

}



() => {

  new Promise((resolve, reject) => {
    throw new Error("error");
  })
    .finally(() => alert("Промис завершён")) // срабатывает первым
    .catch(err => alert(err));  // <-- .catch показывает ошибку

}



() => {

  new Promise((resolve, reject) => {
    throw new Error("error");
  })
    .finally(() => {
      throw new Error('error finally')
    }) // срабатывает первым
    .catch(err => alert(err));  // <-- .catch показывает ошибку

}



() => {

  alert('1')

  let promise = new Promise(resolve => resolve("готово!"));

  promise.then(alert); // готово! (выведется сразу)

  alert('2')

}