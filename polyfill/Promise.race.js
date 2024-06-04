
if(!Promise.race) {

  Promise.race = function (iterable) {
    return new Promise((resolve, reject) => {
      for(const item of iterable) {
        item.then(res => resolve(res)).catch(err => reject(err))
      }
    })
  }


  Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).then(res => console.log(res)).catch(err => console.log(err))


  Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).then(res => console.log(res)).catch(err => console.log(err))

}