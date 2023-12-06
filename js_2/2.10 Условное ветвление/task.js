
if ("0") {
  alert( 'Привет' ); // выведется
}

const result = prompt('Какое «официальное» название JavaScript?', '');

if(result === 'ECMAScript'){
  alert('Верно!')
} else {
  alert('Не знаете? ECMAScript!')
}

const result2 = +prompt('write number', '');

if(result2 > 0){
  console.log(1)
} else if(result2 > 0) {
  console.log(-1)
} else {
  console.log(0)
}

let result3;
if (a + b < 4) {
  result3 = 'Мало';
} else {
  result3 = 'Много';
}

const a = 1, b = 2;

(a + b < 4) ? 'Мало' : 'Много';

let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

(login == 'Сотрудник') ? 'Привет' :
(login == 'Директор') ? 'Здравствуйте' :
(login == '') ? 'Нет логина' : '';



