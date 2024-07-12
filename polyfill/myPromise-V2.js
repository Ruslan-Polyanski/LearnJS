
class MyPromise {
  constructor(cb) {
    this._state = "pending";
    this._result = undefined;
    this._queueMicrotask = {
      res: [],
      rej: [],
    }

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
      this._queueMicrotask.res.forEach(res => res(value))
    }
  }

  reject(error) {
    if(this._state === "pending") {
      this._state = "rejected";
      this._result = error;
      this._queueMicrotask.rej.forEach(rej => rej(error))
    }
  }

  then(res, rej) {

    return new MyPromise((resolve, reject) => {

      if(this._state === "pending") {
        if(typeof res === 'function') {
          this._queueMicrotask.res.push(() => {
            try {
              const newResult = res(this._result);
              resolve(resolve)
            } catch(error) {
              reject(error)
            }
          })
        }

        if(typeof rej === 'function') {
          this._queueMicrotask.rej.push(() => {
            try {
              const newResult = rej(this._result);
              reject(newResult)
            } catch(error) {
              reject(error)
            }
          })
        }
      } 

      if(typeof res === "function" && this._state === "fullfield") {
          try {
            const newResult = res(this._result);
            resolve(resolve)
          } catch(error) {
            reject(error)
          }
      } 
  
      if(typeof rej === "function" && this._state === "rejected") {
          try {
            const newResult = rej(this._result);
            reject(newResult)
          } catch(error) {
            reject(error)
          }
      }

    })

  }

  catch(rej) {
    return this.then(null, rej);
  }

}


const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve('Errorrrrrrrrrr')
    }, 3000)
})

promise.then(result => console.log(result))