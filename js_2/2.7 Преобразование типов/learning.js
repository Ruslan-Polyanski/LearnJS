// Преобразование типов

// Строковое преобразование

console.log(String(true))
console.log(String(false))
console.log(String(NaN))
console.log(String(Infinity))
console.log(String(null))
console.log(String(undefined))

// Численное преобразование

console.log( "6" / "2" ); // 3, строки преобразуются в числа

let str = "123";
alert(typeof str); // string

let num = Number(str); // становится числом 123

alert(typeof num); // number

let age = Number("Любая строка вместо числа");

alert(age); // NaN, преобразование не удалось

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("Привет!") ); // true
alert( Boolean("") ); // false

alert( Boolean("0") ); // true
alert( Boolean(" ") ); // пробел это тоже true (любая непустая строка это true)


