console.log( null || 2 || undefined ); // 2
alert( alert(1) || 2 || alert(3) ); // 1 2
alert( 1 && null && 2 ); // null
alert( alert(1) && alert(2) ); // 1 undefined
alert( null || 2 && 3 || 4 ); // 3

let value = NaN;

value &&= 10; // NaN если каждый шаг value новый созданный
value ||= 20; // 20 если каждый шаг value новый созданный
value &&= 30; // NaN если каждый шаг value новый созданный
value ||= 40; // 40 если каждый шаг value новый созданный

alert(value); // 30 если каждый шаг value старый с самого начала

const age = 20;
if( 14 <= age && age <= 90){
  console.log(true)
} else {
  console.log(false)
}

const age1 = 20;
if( 14 <= age1 <= 90){
  console.log(true)
} else {
  console.log(false)
}

if (-1 || 0) alert( 'first' ); // 'first'
if (-1 && 0) alert( 'second' ); // ---
if (null || -1 && 1) alert( 'third' ); // 'third'

const result = prompt('Ваш логин', '');

if(result === 'Admin'){
  const result = prompt('Введите пароль');
  if(!result){
    alert('Отменено');
  } else if(result === 'Я главный'){
    alert('Здравствуйте!');
  } else {
    alert('Неверный пароль');
  }
} else {
  alert('I dont know who are you')
}