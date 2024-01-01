const arr = [1, 2, 3, 4, 5];

if(!Array.prototype.at) {
  Array.prototype.myAt = function myAt(number) {
    if(number === undefined) return this[0]
    return (number >= 0) ? this[number] : this[this.length + number];
  }
}