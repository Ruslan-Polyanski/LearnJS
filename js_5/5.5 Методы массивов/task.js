
// Напишите функцию camelize(str), которая преобразует строки 
// вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

function camelize(str) {
  const arrLetter = str.split('');
  console.log(arrLetter)
  const result = [];
  let flag = false;

  arrLetter.forEach((value) => {
    if(flag === true && value !== '-') {
      result.push(value.toUpperCase())
      flag = false;
    } else if(flag === false && value === '-') {
      flag = true;
    } else {
      result.push(value)
    }
  })

  return result.join('');
}

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition-") == 'WebkitTransition';