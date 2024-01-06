
// Напишите функцию ucFirst(str), возвращающую строку str 
// с заглавным первым символом.
// ucFirst("вася") == "Вася";

function ucFirst(str: string): string {
  if(!str) return '';

  const result = str[0].toUpperCase() + str.slice(1);

  return result;
}

ucFirst('бася')
ucFirst('лола')
ucFirst('piano')
ucFirst('')


// Напишите функцию checkSpam(str), возвращающую true, 
// если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.

function checkSpam(str: string): boolean {
  const spamOne = 'VIAGRA';
  const spamTwo = 'XXX';

  const strUpper = str.toUpperCase();

  const result = strUpper.includes(spamOne) || strUpper.includes(spamTwo);

  return result;
}

checkSpam('buy ViAgRA now')
checkSpam('free xxxxx')
checkSpam("innocent rabbit")


// Создайте функцию truncate(str, maxlength), которая проверяет 
// длину строки str и, если она превосходит maxlength, 
// заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, 
// если усечение не требуется, либо, если необходимо, усечённая строка.

function truncate(str: string, maxlength: number): string {
  const rest = "…";
  const leng = str.length;
  let result = '';

  if(leng <= maxlength) {
    result += str;
  }

  if(leng > maxlength) {
    result = str.slice(0, --maxlength) + rest;
  }
  
  return result;
}

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)
truncate("Всем привет!", 20)


// Есть стоимость в виде строки "$120". 
// То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки 
// выделять числовое значение и возвращать его.

function extractCurrencyValue(str: string): number {
  return +str.slice(1);
}

extractCurrencyValue('$120') === 120  // true