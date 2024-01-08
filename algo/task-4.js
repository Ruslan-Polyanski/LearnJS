
const arr = [12, 7, 19, 16, 76, 3, 8, 11, 14, 2, 46, 35, 41, 99];

function quickSort(arr) {
  if(arr.length === 1) return arr;
  if(arr.length === 0) return [];

  if(arr.length === 2) {
    return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
  }
  
  const startArr = [];
  let baseNum = null;
  const endArr = [];

  baseNum = arr[0];

  for(let i = 1; i < arr.length; ++i) {
    baseNum > arr[i] ? startArr.push(arr[i]) : endArr.push(arr[i])
  }

  return [...quickSort(startArr), baseNum, ...quickSort(endArr)];
}

quickSort(arr)