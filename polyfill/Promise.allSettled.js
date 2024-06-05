
if(!Promise.allSettled) {

  Promise.allSettled = function (iterable) {
    const result = Array.from(iterable)
    let count = 0;

    return new Promise((resolve) => {
      result.forEach((item, index, arr) => {
        item = Promise.resolve(item)
        item.then(res => {
          arr[index] = {status: 'fulfilled', value: res}
          ++count === result.length ? resolve(result) : null
        }).catch(err => {
          arr[index] = {status: 'rejected', reason: err}
          ++count === result.length ? resolve(result) : null
        })
      })
    })

  }


  Promise.allSettled([
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(1), 1000)
    }),
    2,
    3
  ]).then(res => console.log(res));

  Promise.allSettled([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
  ]).then(res => console.log(res));

  Promise.allSettled([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).then(res => console.log(res)).catch(err => console.log(err));

}