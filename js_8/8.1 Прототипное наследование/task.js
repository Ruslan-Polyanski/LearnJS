
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

  const head = {
    glasses: 1
  };
  
  const table = {
    pen: 3,
    __proto__: head,
  };
  
  const bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table,
  };
  
  const pockets = {
    money: 2000,
    __proto__: bed,
  };

  console.log( pockets.pen ) // 3
  console.log( bed.glasses ) // 1

  console.log( pockets.glasses ) // Длинная цепочка
  console.log( head.glasses ) // Короткая цепочка

}



() => {

  // Куда будет произведена запись?
  // Объект rabbit наследует от объекта animal.
  // Какой объект получит свойство full при вызове 
  // rabbit.eat(): animal или rabbit?

  const animal = {
    eat() {
      this.full = true;
    }
  };

  const rabbit = {
    __proto__: animal
  };

  rabbit.eat(); // rabbit.full = true

}



() => {

  // Почему наедаются оба хомяка?
  // У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); 
  // оба наследуют от общего объекта hamster.
  // Когда мы кормим одного хомяка, второй тоже наедается. 
  // Почему? Как это исправить?
  
  const hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  const speedy = {
    __proto__: hamster
  };
  
  const lazy = {
    __proto__: hamster
  };
  
  // Этот хомяк нашёл еду
  speedy.eat("apple");
  console.log( speedy.stomach ); // apple
  
  // У этого хомяка тоже есть еда. Почему? Исправьте
  console.log( lazy.stomach ); // apple

}



() => {

    // Для решения задачи ниже, нужно перенести массив stomach внуть 
  // каждого хомяка

  const hamster = {
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  const speedy = {
    stomach: [],
    __proto__: hamster
  };
  
  const lazy = {
    stomach: [],
    __proto__: hamster
  };

  speedy.eat("apple");
  console.log( speedy.stomach );
  console.log( lazy.stomach ); 

}