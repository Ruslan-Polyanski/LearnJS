
() => {

    const arr = [54, 83, 9, 93, 7, 2, 31, 8, 59, 90, 66, 100, 36, 86, 41, 82, 47, 
      16, 10, 43, 64, 26, 60, 79, 29, 33, 46, 97, 15, 53, 91, 44, 61, 48, 
      67, 27, 22, 95, 3, 76, 50, 13, 73, 99, 42, 80, 49, 39, 63, 32, 57, 
      28, 94, 24, 84, 77, 40, 5, 96, 85, 72, 70, 87, 20, 35, 68, 11, 51, 
      45, 74, 21, 14, 98, 78, 1, 37, 18, 65, 38, 92, 23, 89, 17, 56, 55, 75, 
      69, 88, 6, 52, 62, 58, 4, 71, 30, 81, 19, 12, 34, 25];

  function sortNumbers(arr) {
  const resultArr = [];
  let copyArr = arr.slice();

  function getSmollNumber(arr) {
  let minNumber = arr[0];
  let minIndex = 0;

  for (let i = 1; i < arr.length; ++i) {
  if(arr[i] < minNumber) {
  minNumber = arr[i];
  minIndex = i;
  }  
  }

  return minIndex;
  }


  for (let i = 0; i < arr.length; ++i) {
  const minIndex = getSmollNumber(copyArr);
  resultArr.push(copyArr[minIndex])
  copyArr = [...copyArr.slice(0, minIndex), ...copyArr.slice(minIndex + 1, copyArr.length)]
  }

  return resultArr;
  }

  sortNumbers(arr)

}



() => {

  // Сортировка пузырьком
  
  const arr = [54, 83, 9, 93, 7, 2, 31, 8, 59, 90, 66, 100, 36, 86, 41, 82, 47, 
    16, 10, 43, 64, 26, 60, 79, 29, 33, 46, 97, 15, 53, 91, 44, 61, 48, 
    67, 27, 22, 95, 3, 76, 50, 13, 73, 99, 42, 80, 49, 39, 63, 32, 57, 
    28, 94, 24, 84, 77, 40, 5, 96, 85, 72, 70, 87, 20, 35, 68, 11, 51, 
    45, 74, 21, 14, 98, 78, 1, 37, 18, 65, 38, 92, 23, 89, 17, 56, 55, 75, 
    69, 88, 6, 52, 62, 58, 4, 71, 30, 81, 19, 12, 34, 25];

  
  function sortBubble(arr) {
    const copyArr = arr.slice();
    const leng = copyArr.length;

    for(let i = 0; i < leng; ++i) {
      for(let j = 0; j < leng; ++j) {
        if( copyArr[j] > copyArr[j + 1] ) {
          [copyArr[j + 1], copyArr[j]] = [copyArr[j], copyArr[j + 1]]
        }
      }
    }

    return copyArr;
  }

  sortBubble(arr)

}



() => {

  // Сортировка выбором с перемешиванием массива

  const arr = [54, 83, 9, 93, 7, 2, 31, 8, 59, 90, 66, 100, 36, 86, 41, 82, 47, 
    16, 10, 43, 64, 26, 60, 79, 29, 33, 46, 97, 15, 53, 91, 44, 61, 48, 
    67, 27, 22, 95, 3, 76, 50, 13, 73, 99, 42, 80, 49, 39, 63, 32, 57, 
    28, 94, 24, 84, 77, 40, 5, 96, 85, 72, 70, 87, 20, 35, 68, 11, 51, 
    45, 74, 21, 14, 98, 78, 1, 37, 18, 65, 38, 92, 23, 89, 17, 56, 55, 75, 
    69, 88, 6, 52, 62, 58, 4, 71, 30, 81, 19, 12, 34, 25];

  function sortSelection(arr) {
    const copyArr = arr.slice();
    const leng = copyArr.length;

    for(let i = 0; i < leng; ++i) {
      for(let j = i + 1; j < leng; ++j) {
        if(copyArr[i] > copyArr[j]) {
          [copyArr[i], copyArr[j]] = [copyArr[j], copyArr[i]]
        }
      }
    }

    return copyArr;
  }

  sortSelection(arr)

}


() => {

  // Сортировка выбором
  
  const arr = [54, 83, 9, 93, 7, 2, 31, 8, 59, 90, 66, 100, 36, 86, 41, 82, 47, 
    16, 10, 43, 64, 26, 60, 79, 29, 33, 46, 97, 15, 53, 91, 44, 61, 48, 
    67, 27, 22, 95, 3, 76, 50, 13, 73, 99, 42, 80, 49, 39, 63, 32, 57, 
    28, 94, 24, 84, 77, 40, 5, 96, 85, 72, 70, 87, 20, 35, 68, 11, 51, 
    45, 74, 21, 14, 98, 78, 1, 37, 18, 65, 38, 92, 23, 89, 17, 56, 55, 75, 
    69, 88, 6, 52, 62, 58, 4, 71, 30, 81, 19, 12, 34, 25];

  function sortSelection(arr) {
    const copyArr = arr.slice();
    const leng = copyArr.length;

    for(let i = 0; i < leng; ++i) {
      let indexMinValue = i;

      for(let j = i + 1; j < leng; ++j) {
        if(copyArr[indexMinValue] > copyArr[j]) {
          indexMinValue = j;
        }
      }

      if(i !== indexMinValue) {
        [copyArr[i], copyArr[indexMinValue]] = [copyArr[indexMinValue], copyArr[i]];
      }

    }



    return copyArr;
  }

  sortSelection(arr)

}
