
() => {

  new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000);
  
  }).then(function(result) {
  
    console.log(result); // 1
  
    return new Promise((resolve, reject) => { // (*)
      setTimeout(() => resolve(result * 2), 1000);
    });
  
  }).then(function(result) { // (**)
  
    console.log(result); // 2
  
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  
  }).then(function(result) {
  
    console.log(result); // 4
  
  });

}



() => {

  class Thenable {
    constructor(num) {
      this.num = num;
    }

    then(res, rej) {
      setTimeout(() => {
        res(this.num * 2)
      }, 2000)
    }
  }

  // const thenable = {
  //   num: 5, 
  //   then(resolve, rejecte) {
  //       setTimeout(() => {
  //         resolve(this.num * 3)
  //     }, 2000)
  // }}

  new Promise(resolve => resolve(1))
  .then(result => {
    return new Thenable(result);
  })
  .then(alert); 

}



() => {

  new Promise(function(resolve, reject) {
    setTimeout(() => {
      throw new Error("Whoops!");
    }, 1000);
  }).catch(alert);

}