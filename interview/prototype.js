
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
// Как осущесвтить наследование свойства в this?
// Как создать объект без прототипа?
// Как изменить прототип у созданного объекта?
// Как получить прототип у объекта/числа/строки?