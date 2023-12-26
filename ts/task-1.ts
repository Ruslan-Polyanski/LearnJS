
function multiply(a: number, b: number) {
  return a * b;
}

multiply(3, 8); // 24
multiply(1, 2); // 2



function repeat(text: string, count: number) {
  let result = '';
  
  for(let i = 0; i < count; ++i){
    result += text;
  }

  return result;
}

repeat('hexlet', 2); // hexlethexlet
repeat('wo', 3); // wowowo



function getHiddenCard(tel: string, count = 4): string {
  const lastFourSimbols = tel.slice(-4);
  const starSimbol = '*';
  const result = starSimbol.repeat(count) + lastFourSimbols;
  return result;  
}

// Кредитка передается внутрь как строка
getHiddenCard('1234567812345678', 2) // "**5678"
getHiddenCard('1234567812345678', 3) // "***5678"
getHiddenCard('1234567812345678')    // "****5678"
getHiddenCard('2034399002121100', 1) // "*1100"



function getEvenNums(numbers: Array<number>): Array<number> {
  const result = numbers.filter((num) => !(num % 2));
  return result;
}

getEvenNums([1, 2, 3, 4, 5, 6]) // [ 2, 4, 6 ]
getEvenNums([2, 10, 15, 16, 20, 23]) // [ 2, 10, 16, 20 ]
getEvenNums([10, 20, 30, 42, 51, 60]) // [ 10, 20, 30, 42, 60 ]
getEvenNums([1, 3, 8, 9, 100, 23, 55, 34]) // [8, 100, 34]

const numbers1 = [1, 3, 8, 9, 100, 23, 55, 34];
const getEvenNumbers2 = () => numbers1.filter((num) => !(num % 2));



function filterAnagrams(word: string, wordsArray: Array<string>): Array<string> {
  const lettersArraySort = word.split('').sort().join('');
  const result = wordsArray.filter((word) => word.split('').sort().join('') === lettersArraySort)
  return result;
}

filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
// ['aabb', 'bbaa']

filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);
// ['carer', 'racer']

filterAnagrams('laser', ['lazing', 'lazy',  'lacer']);
// []