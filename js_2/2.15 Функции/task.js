function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

function checkAge(age) {
  return age > 18 ? true : confirm('Родители разрешили?')
}

function checkAge(age) {
  return age > 18 || confirm('Родители разрешили?');
}

function getMin(a, b) {
  return (a > b) ? b : a;
}

getMin(2, 5) == 2
getMin(3, -1) == -1
getMin(1, 1) == 1

const x = prompt('x', '');
const n = prompt('n', '');

function isNatural(n) {
  return (n >= 1) ? true : false;
}

function pow(x, n) {
  if(isNatural(n)){
    return x**n;
  } else {
    alert(`Степень ${n} не поддерживается`);
  }
}

