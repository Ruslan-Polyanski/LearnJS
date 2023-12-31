// Определите функцию max(), которая отличается от примера 
// из урока только тем, что у нее первый параметр обязательный.

function max(num: number, ...numbers: number[]): number {
  return Math.max(num, ...numbers);
}

max(1,2,3);
max(234);