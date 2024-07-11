
() => {

  setTimeout(function timeout() {
    console.log("Таймфут")
  })

  let p = new Promise(function(resolve, reject) {
    console.log('Создание промиса')
  })

  p.then(function() {
    console.log('Обработка промиса')
  })

  console.log('Конец скрипта')

}

() => {

  function one() {
    try {
      two().catch(console.log)
    } catch (err) {
      console.log(err)
    }
    
    console.log('noError1')
  }
  
  one()
  
  async function two() {
    throw new Error('error 2')
  }

}


console.log("sosu1");

function throwError() {
  throw new Error("Произошла ошибка");
}

throwError();

console.log("sosu2");

new Promise((r, j) => {
  setTimeout(r, 100);
}).then(() => console.log(1232));

//-------------------------------
console.log("aboba1");

new Promise((r, j) => {
  setTimeout(j, 1000);
}).then(() => console.log(1232));

console.log("aboba2");

new Promise((r, j) => {
  setTimeout(r, 3000);
}).then(() => console.log(1232));

console.log("aboba3");

//--------------------------------------------
const prom1 = new Promise((res) => {
  setTimeout(() => {
    res();
  }, 1000);
});

prom1
  .then(() => {
    console.log(1);
  })
  .then(() => {
    console.log(4);
  })
  .then(() => {
    console.log(5);
  });

prom1
  .then(() => {
    console.log(2);
  })
  .then(() => {
    console.log(6);
  });

prom1.then(() => {
  console.log(3);
});

setTimeout(() => {
  prom1.then(() => console.log(7));
}, 1000);

// Then cathch finally и выполнение res и rej
new Promise((res, rej) => {
  rej("error");

  setTimeout(() => {
    console.log("setTimeout");
    res("succ");
  }, 0);
})
  .then(console.log)
  .catch(console.log)
  .finally(() => {
    console.log("any");
  });

// -----------------------
function successFetch() {
  return new Promise((res, rej) => {
    console.log("succ");
    res("succ");
  });
}

function failedFetch() {
  return new Promise((res, rej) => {
    console.log("erorka");
    rej("error");
  });
}

new Promise((res, rej) => res())
  .then(successFetch)
  .then(failedFetch)
  .finally((item) => console.log(1 + 2))
  .catch((err) => {
    console.log(err);
  })
  .finally((item) => console.log(3 + 2));

// ----------------------------
Promise.reject("1")
  .then(
    (value) => value + "2",
    (value) => value + "3"
  )
  .catch((value) => value + "4")
  .catch((value) => value + "5")
  .then((value) => value + "6")
  .then("7")
  .then((value) => value + "8")
  .finally((value) => value + "9")
  .then((value) => console.log(value));

//--------------------------------------------
const prom1 = new Promise((res) => {
  console.log(0);
  setTimeout(() => {
    res();
  }, 1000);
});

prom1
  .then(() => {
    console.log(1);
  })
  .then(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  });

prom1
  .then(() => {
    console.log(4);
  })
  .then(() => {
    console.log(5);
  });

prom1.then(() => {
  console.log(6);
});

prom1.then(console.log(7));

// Обработка ошибок
new Promise((r, re) => {
  throw new Error("123");
});

new Promise((r, re) => {
  throw new Error("321");
});

console.log(123);

// -----------------
try {
  Promise.resolve(1).then(() => {
    throw new Error("lox");
  });
} catch (e) {
  console.log("123");
}

// ------------------
console.log("sosu1");

function throwError() {
  throw new Error("Произошла ошибка");
}

throwError();

console.log("sosu2");

new Promise((r, j) => {
  setTimeout(r, 100);
}).then(() => console.log(1232));

//-------------------------------
console.log("aboba1");

new Promise((r, j) => {
  setTimeout(j, 1000);
}).then(() => console.log(1232));

console.log("aboba2");

new Promise((r, j) => {
  setTimeout(r, 3000);
}).then(() => console.log(1232));

console.log("aboba3");

// --------------------
new Promise((res, rej) => {
  res(123);
})
  .then(() => {
    throw new Error(213);
  })
  .catch(() => {
    return 123213;
  })
  .then()
  .catch(console.log)
  .then(console.log);

// Event Loop
console.log(1);

const fn = () =>
  new Promise((resolve, reject) => {
    console.log(2);
    resolve("success");
  });

console.log(3);

fn().then((res) => {
  console.log(res);
});

console.log(4);

// Event Loop
const promise = new Promise((resolve, reject) => {
  console.log(1);

  setTimeout(() => {
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);

  console.log(2);
});

promise.then((res) => {
  console.log(res);
  console.log("promise then");
});

console.log(4);

// Promise EventLoop Async\await
const a = async function () {
  console.log(1);
  new Promise((res) => res(console.log(2))).then(() => console.log(3));

  await console.log(4);

  new Promise((res) => res(console.log(5))).then(() => console.log(6));
};

setTimeout(() => console.log(8), 0);

a().then(() => console.log(9));

console.log(10);
