
() => {

  let json = '{ "age": 30 }'; // данные неполны

  try {

    let user = JSON.parse(json); // <-- выполнится без ошибок

    if (!user.name) {
      throw new SyntaxError("Данные неполны: нет имени"); // (*)
    }

    alert( user.name );

  } catch(e) {
    alert( "JSON Error: " + e.message ); // JSON Error: Данные неполны: нет имени
  }

}



() => {

  function func() {
    // начать делать что-то, что требует завершения (например, измерения)
    try {
      throw new Error('O my ...');
    } catch(e){
      alert('Я поймал')
    } finally {
      alert('Я отсработаю')
    }
  }

  try {
    func()
  } catch(e) {
    alert(e)
  }

}