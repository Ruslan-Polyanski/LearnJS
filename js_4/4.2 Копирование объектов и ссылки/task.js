let user = {
  name: "John",
  age: 30
};

let clone = {}; // новый пустой объект

// давайте скопируем все свойства user в него
for (let key in user) {
  clone[key] = user[key];
}

// теперь clone это полностью независимый объект с тем же содержимым
clone.name = "Pete"; // изменим в нём данные

alert( user.name ); // все ещё John в первоначальном объекте

Object.assign(dest, src1, src2, src3)
// Первый аргумент dest — целевой объект.
// Остальные аргументы src1 - исходные объекты

let user1 = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user1);

let clone2 = {...user1};

const pasendger = {
  age: 30,
  meal: false,
  status: {
    wife: false,
    age: null,
    status2: {
      tort: 12,
      lot: true
    }
  }
}

function getClone(obj) {
  const newObj = {};
  
  for(let key in obj){
    if(typeof obj[key] == 'object'){
      newObj[key] = getClone(obj[key]);
      continue;
    } 
    newObj[key] = obj[key];
  }

  return newObj;
}

const newUser = getClone(pasendger);

console.log(newUser)






