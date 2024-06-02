
() => {

  setTimeout(function timeout() {
    console.log("Таймфут")
  })

  let p = new Promise(function(resolve, reject) {
    console.log('Создание промиса')
  })

  p.then(function() {
    console.log('Обработка промиса')
  })

  console.log('Конец скрипта')

}
