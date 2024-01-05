
// Реализуйте функцию getField(), которая генерирует игровое поле 
// для крестиков ноликов. Функция принимает на вход размерность поля 
// и возвращает массив массивов нужного размера, заполненный значениями null.

function getField(num: number): null[][] {
  const field: null[] = [];
  const result: null[][] = [];
  for(let i = 0; i < num; ++i) {
    field.push(null)
  }
  for(let i = 0; i < num; ++i) {
    result.push(field)
  }
  return result;
}

const field1 = getField(1);
console.log(field1); // [[null]]

const field2 = getField(2);
console.log(field2); // [[null, null], [null, null]]