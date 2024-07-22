
() => {

  // Задание
  // Реализуйте дженерик last(), который извлекает последний элемент из 
  // массива если он есть или null — если его нет:

  function last<TData>(arg: Array<TData>): TData | null {
    return arg.length > 0 ? arg[arg.length - 1] : null;
  }

  last([]); // null
  last([3, 2]); // 2
  last(['code-basics', 'hexlet']); // hexlet

}

() => {

  // Задание
  // * Реализуйте описание обобщенного типа MySet, который представляет из себя 
  // * аналог множества Set из JavaScript. Тип включает в себя два метода: add() и has(). 
  // * Данные внутри должны храниться в свойстве items.

  type MySet<T> = {
    items: Array<T>;
    add(item: T): number;
    has(item: T): boolean;
  }

  const s: MySet<number> = {
    items: [],
    add(item) {
      this.items.includes(item) ? null : this.items.push(item)
      return this.items.length;
    },
    has(item) {
      return this.items.includes(item)
    }
  };

  // Добавление возвращает количество элементов
  s.add(1); // 1
  s.add(10); // 2

  s.has(1); // true
  s.has(8); // false


}

() => {

  // Задание
  // * Реализуйте описание обощенного типа MyArray, который представляет аналог 
  // * массива из JavaScript. Тип включает в себя два метода: push() и filter(), 
  // * совпадающие по сигнатуре с методами Array. Данные внутри должны храниться 
  // * в свойстве items. Для push() примем соглашение, что метод принимает только 
  // * один параметр. Игнорируйте остальные параметры.

  type MyArray<T> = {
    items: Array<T>;
    push(value: T): number;
    filter(callBack: (value: T, index: number, array: Array<T>) => boolean): MyArray<T>
  }

  // const coll: MyArray<number> = {
  //   items: [],
  //   push(value) {
  //     this.items.push(value)
  //     return this.items.length;
  //   },
  //   filter(callBack) {
  //     const newArr = [];
  //     for(let i = 0; i < this.items.length; ++i) {
  //       const value = this.items[i];
  //       callBack(value, i, this.items) ? newArr.push(value) : null
  //     }
  //     return newArr;
  //   }
  // }

  // coll.push(1); // 1
  // coll.push(10); // 2
  // coll.push(99); // 3

  // const newColl = coll.filter((value) => value % 2 == 0);
  // console.log(newColl.items); // [10]

}

() => {

  // Задание
  // * Реализуйте описание обобщенного типа MyMap, который представляет из себя аналог 
  // * ассоциативного массива из JavaScript. Тип включает в себя два метода set() и get(). 
  // * Первый метод принимает два дженерик-параметра: ключ и значение. 
  // * Второй метод принимает ключ и возвращает значение. 
  // * Значения хранятся внутри объекта в виде встроенного в JavaScript класса Map().

  type MyMap<T, U> = {
    map: MyMap<T, U>;
    set(key: T, value: U): void;
    get(key: T): T | undefined
  }

  // const map: MyMap<string, number> = {
  //   map: new Map(),
  //   set(key, value) {
  //     this.map.set(key, value)
  //   },
  //   get(key) {
  //     return this.map.get(key)
  //   }
  // }
  // map.set('one', 1);
  // map.set('two', 2);

  // map.get('one'); // 1
  // map.get('two'); // 2

}