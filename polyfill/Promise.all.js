
if(!Promise.all) {

  Promise.all = function (iterable) {
    const result = Array.from(iterable);
    let counter = 0;

    return new Promise((resolve, reject) => {
      result.forEach((item, index, arr) => {
        item = Promise.resolve(item);
        item.then(res => {
          arr[index] = res;
          ++counter === result.length ? resolve(result) : null;
        }).catch(err => reject(err))    
      })
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

}