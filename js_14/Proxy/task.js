
() => {

  // * Обычно при чтении несуществующего свойства из объекта возвращается undefined.
  // * Создайте прокси, который генерирует ошибку при попытке прочитать несуществующее свойство.
  // * Это может помочь обнаружить программные ошибки пораньше.
  // * Напишите функцию wrap(target), которая берёт объект target и возвращает прокси, 
  // * добавляющий в него этот аспект функциональности.

  let user = {
    name: "John",
    func() {
      return 'I am func';
    }
  };
  
  function wrap(target) {
    return new Proxy(target, {
       get(target, property, receiver) {
          if(property in target) {
            return target[property]; // Reflect.get(target, property, receiver)
          }
          throw new Error('This property is not here')
       }
    });
  }
  
  user = wrap(user);
  
  console.log(user.name); // John
  console.log(user.func);
  console.log(user.age); // Ошибка: такого свойства не существует

}


() => {

  // * В некоторых языках программирования возможно получать элементы массива, используя 
  // * отрицательные индексы, отсчитываемые с конца. Другими словами, array[-N] – это то же, 
  // * что и array[array.length - N] Создайте прокси, который реализовывал бы такое поведение.
  // * Вся остальная функциональность массивов должна остаться без изменений

  let array = [1, 2, 3];

  array = new Proxy(array, {
    get(target, property, receiver) {
      if(property < 0) {
        const indexLast = target.length + +property;
        return target[indexLast];
      }
      return Reflect.get(target, property, receiver);
    }
  });

  console.log( array[-1] ); // 3
  console.log( array[-2] ); // 2

}


() => {

  // * Observable
  // * Создайте функцию makeObservable(target), которая делает объект «наблюдаемым», 
  // * возвращая прокси. Другими словами, возвращаемый makeObservable объект аналогичен исходному,
  // * но также имеет метод observe(handler), который позволяет запускать handler при любом 
  // * изменении свойств. При изменении любого свойства вызывается handler(key, value) с 
  // * именем и значением свойства. P.S. В этой задаче ограничьтесь, пожалуйста, только записью 
  // * свойства. Остальные операции могут быть реализованы похожим образом.

  function makeObservable(target) {

    target.observe = function (handler) {
      target.handler = handler;
    }

    return new Proxy(target, {
      set(target, property, value, recevier) {
        target.handler(property, value)
      }
    });
  }
  
  let user = {};
  user = makeObservable(user);

  user.observe((key, value) => {
    alert(`SET ${key}=${value}`);
  });
  
  user.name = "John"; // выводит: SET name=John
  user.name = "Anna"; // выводит: SET name=Anna

}