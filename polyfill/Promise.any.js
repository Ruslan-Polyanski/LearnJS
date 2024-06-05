
if(!Promise.any) {

  Promise.any = function (iterable) {
    const data = Array.from(iterable);
    const errors = [];
    let count = 0;

    return new Promise((resolve, reject) => {
      data.forEach((item, index, arr) => {
        item = Promise.resolve(item);
        item.then(res => resolve(res)).catch(err => {
          errors[index] = err;
          ++count === data.length ? reject(AggregateError(errors)) : null
        })
      })
    })

  }

  Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).then(res => console.log(res)).catch(err => console.log(err.errors))

  Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ещё одна ошибка!")), 2000))
  ]).then(res => console.log(res)).catch(err => console.log(err.errors))

  Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ещё одна ошибка!")), 1000))
  ]).then(res => console.log(res)).catch(err => console.log(err.errors))

}

