
class MyPromise {
  
  constructor(executor) {
    this._state = "pending";
    this._result = undefined;
    this._microtasks = {
      fulfilled: [],
      rejected: []
    };

    try {
      executor(this.resolve.bind(this), this.reject.bind(this))
    } catch (err) {
      throw new Error(err)
    }
  }

  resolve(value) {
    if(this._state === "pending") {
      this._state = "fulfilled";
      this._result = value;
      this._microtasks.fulfilled.forEach(res => res(this._result))
    }
  }

  reject(error) {
    if(this._state === "pending") {
      this._state = "rejected";
      this._result = error;
      this._microtasks.rejected.forEach(rej => rej(this._result))
    }
  }

  then(res, rej) {
    
    if(this._state === "pending") {
      if(res) {
        this._microtasks.fulfilled.push(res)
      }
      if(rej) {
        this._microtasks.rejected.push(rej)
      }
    }

    if(res && this._state === "fulfilled") {
      this.res(this._result)
    }

    if(rej && this._state === "rejected") {
      this.rej(this._result)
    }

  }

  catch(reject) {
    return this.then(null, reject);
  }

}

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('resolve-1')
  }, 5000)
});

promise.then((res) => {})

console.dir(promise)

promise.then(res => res, err => err).catch(err => err).finally(() => {

})