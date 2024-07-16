// Реализуйте функцию newYearCongratulate(), которая аналогична 
// примеру на Kotlin из теории:

function newYearCongratulate(a: string): string;
function newYearCongratulate(a: number, b: string): string;

function newYearCongratulate(a: unknown, b?: string): string {
  if(typeof a === 'number' && typeof b === 'string') {
    return `Hi ${b}! Happy New Year ${a}!`;
  }
  return `Hi ${a}! Happy New Year!`;
}

newYearCongratulate('John'); // Hi John! Happy New Year!
newYearCongratulate(2023, 'Mila'); // Hi Mila! Happy New Year 2023!