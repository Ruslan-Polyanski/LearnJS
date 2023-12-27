//////////////
function multiply(a: number, b: number) {
  return a * b;
}

multiply(3, 8); // 24
multiply(1, 2); // 2


//////////////
function repeat(text: string, count: number) {
  let result = '';
  
  for(let i = 0; i < count; ++i){
    result += text;
  }

  return result;
}

repeat('hexlet', 2); // hexlethexlet
repeat('wo', 3); // wowowo


//////////////
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


//////////////
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


////////////////
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



///////////////
function isComplete(course: {name: string, lessons: Array<string>}): boolean {
  return course.lessons.length >= 4 ? true : false;
}

// Определите тип исходя из структуры объекта
const course = {
  name: 'Java',
  lessons: ['variables', 'functions', 'conditions'],
};
isComplete(course); // false



///////////////////
enum statusUser {
  user,
  admin,
  superAdmin,
}
console.log(statusUser.user)


enum ModalStatus {
  Opened,
  Closed
} 

function buildModal(text: string, status: ModalStatus): {text: string, status: ModalStatus} {
  return {text, status};
}

const modal = buildModal('hexlet forever', ModalStatus.Opened);
// { text: 'hexlet forever', status: ModalStatus.Opened }


/////////////

type TUser = {
  name: string,
  age: number,
}

type TFunc = (user1: TUser, user2: TUser) => TUser | null;

const user1 = { name: 'Petr', age: 8 };
const user2 = { name: 'Liza', age: 7 };

const getOlderUser: TFunc = (user1, user2) => {
  if(user1.age === user2.age) {
    return null;
  }

  if(user1.age > user2.age) {
    return user1;
  }

  return user2;
}

// function getOlderUser(user1: TUser, user2: TUser): TUser | null {
//   if(user1.age === user2.age) {
//     return null;
//   }

//   if(user1.age > user2.age) {
//     return user1;
//   }

//   return user2;
// }

console.log(getOlderUser(user1, user2))


////////////////
const num1: any = 5;
num1()
num1.value

const num: unknown = 5;
if(typeof num === 'function') {
  num()
}



(() => {

// Реализуйте функцию getParams(), которая принимает 
// на вход строку запроса (query string) и возвращает параметры в виде объекта

function getParams(query: string): any {
  const pairs = query.split('&');
  const initial: any = {};
  const result = pairs.reduce((acc, pair) => {
    const pairArray = pair.split('=');
    acc[pairArray[0]] = pairArray[1];
    return acc;
  }, initial);
  return result;
}

  getParams('per=10&page=5');
  // { per: '10', page: '5' }
  getParams('name=hexlet&count=3&order=asc');
  // { name: 'hexlet', count: '3', order: 'asc' }

});



////////////// 11

  namespace Company {
    export function isEmployeeEmail(email: string, domen: string): boolean {
      const [name1, name2] = email.split('@');
      return name2 === domen;
    }
  }

  Company.isEmployeeEmail('tirion@hexlet.io', 'hexlet.io');
  // true

  Company.isEmployeeEmail('user@example.com', 'hexlet.io');
  // false












