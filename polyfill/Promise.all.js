
if(!Promise.all) {

  Promise.all = function (iterable) {
    const result = [];

    for(const item of iterable) {
      const promise = Promise.resolve(item);
      result.push(promise)
    }

    return new Promise((resolve, reject) => {
        result.forEach((item, index, arr) => {
          item.then(
                (res) => {arr[index] = res},
                (err) => {reject(err)}
              )
        })
        setTimeout(() => {
          resolve(result)
        }, 0)
    })

  }

  Promise.all([
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(1), 1000)
    }),
    2,
    3
  ]).then(res => console.log(res));

  Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
  ]).then(res => console.log(res));

  Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).catch(err => console.log(err));

  const myPromise =   Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ])

}