let age = prompt('Сколько вам лет?', 18);

switch (age) {
  case 18:
    alert("Так не сработает"); // результатом prompt является строка, а не число

  case "18":
    alert("А так сработает!");
    break;

  default:
    alert("Любое значение, неравное значению выше");
}


function sum(a, b) {
  let result = a + b;

  return result;
}

let sum = function(a, b) {
  let result = a + b;

  return result;
};

// выражение в правой части
let sum = (a, b) => a + b;

// многострочный код в фигурных скобках { ... }, здесь нужен return:
let sum = (a, b) => {
  // ...
  return a + b;
}

// без аргументов
let sayHi = () => alert("Привет");

// с одним аргументом
let double = n => n * 2;
