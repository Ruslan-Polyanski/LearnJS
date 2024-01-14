
let arr1 = new Array();
let arr2 = [];


let fruits = [];
fruits[123] = "Яблоко";

alert( fruits.length ); // 124


let arr = [1, 2, 3, 4, 5];

arr.length = 2; // укорачиваем до двух элементов
alert( arr ); // [1, 2]

arr.length = 5; // возвращаем length как было
alert( arr[3] ); // undefined: значения не восстановились

alert( [] + 1 ); // "1"
alert( [1] + 1 ); // "11"
alert( [1,2] + 1 ); // "1,21"

alert( [] == [] ); // false
alert( [0] == [0] ); // false

