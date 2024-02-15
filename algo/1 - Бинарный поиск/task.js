
() => {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 
                  12, 13, 14, 15, 16, 17, 18, 19, 20, 
                  21, 22, 23, 24, 25, 26, 27, 28, 29, 
                  30, 31, 32, 33, 34, 35, 36, 37, 38, 
                  39, 40, 41, 42, 43, 44, 45, 46, 47, 
                  48, 49, 50, 51, 52, 53, 54, 55, 56, 
                  57, 58, 59, 60];

  function cycleBinarySearch(data, number) {
    let firstIndex = 0;
    let lastIndex = data.length - 1;

    while(firstIndex <= lastIndex) {
      let middleINdex = Math.floor((firstIndex + lastIndex) / 2);
      let middleElement = data[middleINdex];

      if(number < middleElement) {
        lastIndex = middleINdex - 1;
      }
    
      if(number > middleElement) {
        firstIndex = middleINdex + 1;
      }
    
      if(number === middleElement) {
        return middleINdex;
      }
    }

    return false;

  }

  console.log(cycleBinarySearch(numbers, 20)) // 19
  console.log(cycleBinarySearch(numbers, 120)) // false

}



