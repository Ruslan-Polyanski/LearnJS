
() => {

  // * Полифилл на Array.prototype.map
  // arr.map((item, index, arr) => {
  //   return item;
  // })

  if(!Array.prototype.mapMy) {
    Array.prototype.mapMy = (callBack) => {
      const leng = this.length;
      const newArr = [];
      for(let i = 0; i < leng; ++i) {
        const result = callBack(this[i], i, this)
        newArr.push(result)
      }
      return newArr;
    }
  }

}