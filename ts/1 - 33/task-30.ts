
// Реализуйте объект по описанному типу Form. 
// Поле name.value должно проходить валидацию, а поле age — нет.

type Form = {
  age: {
    value: number,
    validator: (val: number) => boolean
  },
  name: {
    value: string,
    validator: (val: string) => boolean
  }
};

const form: Form = {
  age: {
    value: 15,
    validator: (val) => typeof val === 'number' ? false : true
  },
  name: {
    value: 'Liza',
    validator: (val) => typeof val === 'string' ? true : false
  }
};


console.log(form.name.validator(form.name.value)); // true
console.log(form.age.validator(form.age.value)); // false