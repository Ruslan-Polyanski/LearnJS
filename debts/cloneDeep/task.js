
const obj = {
  name: "Ilona",
  value: 27,
  status: {
    numbers: [1, { name: 'Jhon', status: { name: 'goga'} }, 3, 4],
    isMarried: false,
    isChildren: {
      value: true,
      name: 'Sara',
      age: 10,
    }
  }
}

function cloneDeep(obj) {
  const newObj = {};

  if (obj === null) {
    return null;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => {
      if(typeof item === "object"){
        return cloneDeep(item);
      }
      return item;
    });
  }

  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      newObj[key] = cloneDeep(obj[key])
      continue;
    }
    newObj[key] = obj[key];
  }

  return newObj;
}

const newObj = cloneDeep(obj);

console.log(newObj)
// console.log(newObj === obj)
// console.log(newObj.status === obj.status)
// console.log(newObj.status.isChildren === obj.status.isChildren)
