
// Какое последнее значение выведет этот код? Почему?
// let i = 3;
// while (i) {
//   alert( i-- );
// }
// 3 2 1


// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
// Оба цикла выводят alert с одинаковыми значениями или нет?

// let i = 0;
// while (++i < 5) alert( i );
// 1 2 3 4

let i = 0;
while (i++ < 5) alert( i );
// 1 2 3 4 5

// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
// Оба цикла выведут alert с одинаковыми значениями или нет?

for (let i = 0; i < 5; i++) alert( i );
// 0 1 3 4 

for (let i = 0; i < 5; ++i) alert( i );
// 0 1 3 4 

// При помощи цикла for выведите чётные числа от 2 до 10.

for(let i = 0; i <= 10 ; ++i){
  if(i >= 2 && !(i % 2)){
    console.log(i)
  }
}


// let i = 0;
// while(i < 3;){
//   alert( `number ${i}!` );
//   i++
// }

for(let i = 0; ; ++i){
  const result = prompt('Text number above 100', '');
  if(result === null) break;
  if(result >= 100) break;
}

nextNumber: 
for(let i = 2; i < number; ++i){
  for(let j = 2; j < i; ++j){
    if(i % j === 0) continue nextNumber;
  }
  console.log(i)
}

