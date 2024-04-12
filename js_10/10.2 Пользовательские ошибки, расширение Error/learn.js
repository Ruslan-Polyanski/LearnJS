
() => {

  class ValidationError extends Error {
    constructor(message) {
      super(message)
      this.name = 'ValidationError';
    }
  }

  function test() {
    throw new ValidationError('O my ...')
  }

  try {
    test()
  } catch(err) {
    console.log(err.message)
    console.log(err.name)
    console.log(err.stack)
  }

}