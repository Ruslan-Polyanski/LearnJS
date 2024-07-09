
class MyPromise {
  constructor(cb) {
    this._state = "pending";
    this._result = undefined;

    if(cb) {
      if(typeof cb === 'function') {
        try {
          cb(this.resolve.bind(this), this.reject.bind(this))
        } catch (error) {
          throw new Error(error)
        }
      } else {
        const type = typeof cb;
        throw new TypeError(`MyPromise resolver ${type} is not a function`)
      }
    } else {
      throw new TypeError('MyPromise resolver undefined is not a function');
    }
  }

  resolve(value) {
    if(this._state === "pending") {
      this._state = "fullfield";
      this._result = value;
    }
  }

  reject(error) {
    if(this._state === "pending") {
      this._state = "rejected";
      this._result = error;
    }
  }

  then(res, rej) {
    return new MyPromise((res, rej) => {

      if(typeof res === "function" && this._state === "fullfield") {
        
      }

      if(typeof rej === "function" && this._state === "rejected") {
        
      }



    })
  }

  catch(rej) {
    return this.then(null, rej);
  }

}


const promise = new MyPromise((resolve, reject) => {
  resolve(1)
})

promise.then()