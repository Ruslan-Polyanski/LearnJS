
() => {

  function merge<T>(coll1: Array<T>, coll2: Array<T>): Array<T> {
    const result = [];
    result.push(...coll1);
    result.push(...coll2);
    return result;
  }

  merge([1, 2], [3, 4]); 
  merge(['one', 'two'], ['three']); 

}