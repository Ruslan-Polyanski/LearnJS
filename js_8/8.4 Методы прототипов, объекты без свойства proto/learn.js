
() => {

  const animal = {
    name: 'animal'
  }

  const rabbit = Object.create(animal)

  rabbit.name === animal.name // true
  Object.getPrototypeOf(rabbit) === animal // true
  Object.setPrototypeOf(rabbit, {name: 'newObj'}) // прототипом стал новый объект

}



() => {

  const animal = {
    name: 'animal'
  }

  const rabbit = Object.create(animal, {
    name: {
      value: 'rabbit'
    }
  })

  rabbit.name === 'rabbit' // true

}



() => {

  const animal = {
    name: 'animal'
  }

  const obj = {
    name: 'obj',
    __proto__: animal
  }

  const cloneObj = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj))

  console.log(cloneObj)

}