
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
        this._microtasks.fulfilled.forEach(res => res(value))
      }
    }
  
    reject(error) {
      if(this._state === "pending") {
        this._state = "rejected";
        this._result = error;
        this._microtasks.rejected.forEach(rej => rej(error))
      }
    }
  
    then(res, rej) {
  
      return new MyPromise((resolve, reject) => {
  
        if(this._state === "pending") {
          if(res) {
            this._microtasks.fulfilled.push(() => {
              try {
                const newResult = res(this._result)
                resolve(newResult)
              } catch (error) {
                reject(error)
              }
            })
          }
          if(rej) {
            this._microtasks.rejected.push(() => {
              try {
                const newResult = rej(this._result)
                reject(newResult)
              } catch (error) {
                reject(error)
              }
            })
          }
        }
    
        if(res && this._state === "fulfilled") {
          try {
            const newResult = res(this._result)
            resolve(newResult)
          } catch (error) {
            reject(error)
          }
        }
    
        if(rej && this._state === "rejected") {
          try {
            const newResult = rej(this._result)
            reject(newResult)
          } catch (error) {
            reject(error)
          }
        }
  
      })
  
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
