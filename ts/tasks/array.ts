
() => {

  // * Исходный массив преобразовать в массив с уникальными значениями
  // * Исходный массив [1,2,3,3,4,5,5] => [1,2,3,4,5]. Выполнить несколькми вариантами

  type TList = typeof arr;
  const arr = [1,2,3,3,4,5,5];

  function filterArr(arr: TList): TList {
    const set = new Set(arr);
    return Array.from(set);
  }

  console.log(filterArr(arr))


  function filterArrTwo(arr: TList): TList {
    const words: {[key: string]: number} = {};

    for(let i = 0; i < arr.length; ++i) {
      words[arr[i]] ? null : words[arr[i]] = arr[i];
    }

    return Object.values(words);
  }

  console.log(filterArrTwo(arr))

}



() => {

  // * Нужно вставить недостающий элемент на своё место
  // * Исходный массив [0,1,3,4,5] => [0,1,2,3,4,5]

  type TList = typeof arr;
  const arr = [3,4,7,8];

  function addElement(arr: TList): TList {
    const resultArr: TList = [];
    let item: number | null = null;

    for(let i = 0; i < arr.length; ++i) {
      if(i === 0) {
        resultArr.push(arr[i]) 
        item = arr[i];
        continue;
      }

      if(typeof item === 'number') {
        if(arr[i] === item + 1) {
          resultArr.push(arr[i])
          item = arr[i]
        } else {
          resultArr.push(item + 1)
          ++item
          --i;
        }
      }

    }

    return resultArr;
  }

  console.log(addElement(arr))

}