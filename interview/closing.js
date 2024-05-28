
() => {

  const arr = [];
  var i = 9;

  while (i--) {
    arr.push(() => {
      return i;
    })
  }

  console.log(arr[0]() + arr[1]())

}



() => {

  const arr = [];
  var i = 9;

  for(i = 9; i > 0; i--) {
    arr.push(() => {
      return i;
    })
  }

  console.log(arr[0]() + arr[1]())

}