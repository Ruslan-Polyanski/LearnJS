
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