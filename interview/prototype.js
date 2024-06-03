
() => {

  console.log(({}).prototype === ({}).__proto__);

  // false

}



() => {

    function ITKamasutra() {}

    console.log(ITKamasutra.prototype === ITKamasutra.__proto__);

    // false

}



() => {

    function ITKamasutra() {}
    function ITIncubator (){}

    console.log(ITKamasutra.__proto__ === ITIncubator.__proto__);
    console.log(ITKamasutra.prototype === ITIncubator.prototype);

    // true
    // false

}



() => {

  let Component = (props) => {
      return `<div> I don't know Prototype</div>`;
  }

  console.log(Component.prototype === Object.prototype);

  // false

}



() => {

    let age = 18;

    console.log(age.prototype === Number.prototype);
    console.log(age.__proto__ === Number.prototype);

    // false
    // true

}



() => {

    class Hacker {}

    console.log(Hacker.__proto__ === Function.prototype);

    // true

}



() => {

    function ITIncubator(){}

    console.log(ITIncubator.__proto__ === '???');

    // ITIncubator.__proto__ === Function.prototype

}



() => {

    let count = 12;

    console.log(count.__proto__ === '???');

    // count.__proto__ === Number.prototype

}



// Как осуществить прототипное наследование?
// Например при создании объекта через функцию консруктор для
// созданного объекта устанавливается прототип, который берется
// из свойства prototype функции конструктора, и так по цепочке вверх.
// Цепочка прототипов тянется до null верху иерархии. Поиск любого метода
// идет по цепочке прототипов вверх от начального объекта.


// Как осущесвтить наследование свойства в this?
// Этот вопрос не понятен...


// Как создать объект без прототипа?
// const objZero = Object.create(null)


// Как изменить прототип у созданного объекта?
// const obj = {'key': 1};
// Object.setPrototypeOf(obj, Array.prototype)


// Как получить прототип у объекта/числа/строки?
// const num = 9;
// const srt = '9';
// const obj = {'key': 9};
// num.__proto__
// str.__proto__
// obj.__proto__