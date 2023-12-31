// Типы данных
// Значение в JavaScript всегда относится к данным определённого типа. 
// Например, это может быть строка или число.
// Есть восемь основных типов данных в JavaScript. 

// Переменная в JavaScript может содержать любые данные. 
// В один момент там может быть строка, а в другой – число:

// Не будет ошибкой
let message = "hello";
message = 123456;

// Языки программирования, в которых такое возможно, 
// называются «динамически типизированными». 
// Это значит, что типы данных есть, но переменные не привязаны ни к одному из них.

// Число

let n = 123;
n = 12.345;

// Числовой тип данных (number) представляет как целочисленные значения, так и числа с плавающей точкой.

// Существует множество операций для чисел, например, умножение *, деление /, сложение +, вычитание - и так далее.

// Кроме обычных чисел, существуют так называемые «специальные числовые значения», 
// которые относятся к этому типу данных: Infinity, -Infinity и NaN.

// Infinity представляет собой математическую бесконечность ∞. Это особое значение, которое больше любого числа.

// Мы можем получить его в результате деления на ноль:

alert( 1 / 0 ); // Infinity

// Или задать его явно:

alert( Infinity ); // Infinity

// NaN означает вычислительную ошибку. 
// Это результат неправильной или неопределённой математической операции, например:

alert( "не число" / 2 ); // NaN, такое деление является ошибкой

alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "не число" / 2 - 1 ); // NaN

// Если где-то в математическом выражении есть NaN, то оно распространяется на весь результат (есть только одно исключение: NaN ** 0 равно 1).

console.log(NaN ** 0)// 1

// Математические операции – безопасны
// Математические операции в JavaScript «безопасны». Мы можем делать что угодно: делить на ноль, обращаться с нечисловыми строками как с числами и т.д.

// Скрипт никогда не остановится с фатальной ошибкой (не «умрёт»). В худшем случае мы получим NaN как результат выполнения.

// BigInt
// В JavaScript тип number не может безопасно работать с числами, большими, чем (253-1) (т. е. 9007199254740991) или меньшими, чем -(253-1) для отрицательных чисел.

// Если говорить совсем точно, то, технически, тип number может хранить большие целые числа (до 1.7976931348623157 * 10308), но за пределами безопасного диапазона целых чисел ±(253-1) будет ошибка точности, так как не все цифры помещаются в фиксированную 64-битную память. Поэтому можно хранить «приблизительное» значение.

// Например, эти два числа (прямо за пределами безопасного диапазона) совпадают:

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

// То есть все нечетные целые числа, большие чем (2^53-1), вообще не могут храниться в типе number

// В большинстве случаев безопасного диапазона чисел от -(253-1) до (253-1) 
// вполне достаточно, но иногда нам требуется весь диапазон действительно 
// гигантских целых чисел без каких-либо ограничений или пропущенных значений 
// внутри него. Например, в криптографии или при использовании метки времени 
// («timestamp») с микросекундами.

// Тип BigInt был добавлен в JavaScript, 
// чтобы дать возможность работать с целыми числами произвольной длины.

// Чтобы создать значение типа BigInt, необходимо 
// добавить n в конец числового литерала:

// символ "n" в конце означает, что это BigInt
const bigInt = 1234567890123456789012345678901234567890n;

// Строка
// Строка (string) в JavaScript должна быть заключена в кавычки.

let str = "Привет";
let str2 = 'Одинарные кавычки тоже подойдут';
let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;

// В JavaScript существует три типа кавычек.

// Двойные кавычки: "Привет".
// Одинарные кавычки: 'Привет'.
// Обратные кавычки: `Привет`.

let name = "Иван";

// Вставим переменную
alert( `Привет, ${name}!` ); // Привет, Иван!

// Вставим выражение
alert( `результат: ${1 + 2}` ); // результат: 3

alert( "результат: ${1 + 2}" ); // результат: ${1 + 2} (двойные кавычки ничего не делают)

// Булевый (логический) тип
// Булевый тип (boolean) может принимать только два значения: true (истина) и false (ложь).

// Такой тип, как правило, используется для хранения значений да/нет: true значит «да, правильно», а false значит «нет, не правильно».

// Значение «null»
// Специальное значение null не относится ни к одному из типов, описанных выше.

// Оно формирует отдельный тип, который содержит только значение null:

// Это просто специальное значение, которое представляет собой «ничего», «пусто» или «значение неизвестно».


// Значение «undefined»
// Специальное значение undefined также стоит особняком. Оно формирует тип из самого себя так же, как и null.

// Оно означает, что «значение не было присвоено».

// Если переменная объявлена, но ей не присвоено никакого значения, то её значением будет undefined:

// Объекты и символы
// Тип object (объект) – особенный.

// Тип symbol (символ) используется для создания уникальных идентификаторов в объектах. Мы упоминаем здесь о нём для полноты картины, изучим этот тип после объектов.

// Если передается выражение, то нужно заключать его в скобки, т.к. typeof имеет более высокий приоритет, чем бинарные операторы:

typeof 50 + " Квартир"; // Выведет "number Квартир"
typeof (50 + " Квартир"); // Выведет "string"

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

