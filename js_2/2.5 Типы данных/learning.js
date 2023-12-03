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







