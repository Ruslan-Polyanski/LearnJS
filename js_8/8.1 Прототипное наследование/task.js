
() => {

  // Работа с прототипами
  // В приведённом ниже коде создаются и изменяются два объекта.
  // Какие значения показываются в процессе выполнения кода?

  const animal = {
    jumps: null
  };

  const rabbit = {
    __proto__: animal,
    jumps: true
  };

  console.log( rabbit.jumps ); // true

  delete rabbit.jumps;

  console.log( rabbit.jumps ); // null

  delete animal.jumps;

  console.log( rabbit.jumps ); // undefined

}



() => {

  // Алгоритм поиска
  // С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого 
  // свойства выполнялся по следующему пути: pockets → bed → table → head. 
  // Например, pockets.pen должно возвращать значение 3 (найденное в table), 
  // а bed.glasses – значение 1 (найденное в head).
  // Ответьте на вопрос: как быстрее получить значение glasses – через 
  // pockets.glasses или через head.glasses? При необходимости составьте 
  // цепочки поиска и сравните их.

  let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__: head,
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table,
  };
  
  let pockets = {
    money: 2000,
    __proto__: bed,
  };

  console.log( pockets.pen ) // 3
  console.log( bed.glasses ) // 1

  console.log( pockets.glasses ) // Длинная цепочка
  console.log( head.glasses ) // Короткая цепочка

}