
const str1 = 'str';
const str2 = "str";
const str3 = `str`;

const str4 = `str ${str1}`;

const str5 = `Users: 
 * Alex
 * Lora
 * Liza
 * Elizabet
`;

const str6 = "Users:\n * Alex\n * Lora\n * Liza\n Elizabet";

let str7 = "Hello\nWorld";
let str8 = `Hello
World`;

str7 === str8 // true

'I\'m the Walrus!' // I'm the Walrus!
`I'm the Walrus!` // I'm the Walrus!
"I'm the Walrus!" // I'm the Walrus!

`The backslash: \\` // The backslash: \

let str9 = `Hello`;
str9[-2] // undefined
str9.at(-2) // l

// for..of
const str10 = 'My string';

for(let letter of str10) {
  console.log(letter)
}

// Строки неизменяемы
// Содержимое строки в JavaScript нельзя изменить. 
// Нельзя взять символ посередине и заменить его. 
// Как только строка создана — она такая навсегда.

'Interface'.toUpperCase() // INTERFACE
'Interface'.toLowerCase() // interface

// str.indexOf(substr, pos)

let str11 = 'Widget with id';

alert( str11.indexOf('Widget') ); // 0, потому что подстрока 'Widget' найдена в начале
alert( str11.indexOf('widget') ); // -1, совпадений нет, поиск чувствителен к регистру
alert( str11.indexOf("id") ); // 1, подстрока "id" найдена на позиции 1 (..idget with id)

// str.lastIndexOf(substr, position) с конца в начало

