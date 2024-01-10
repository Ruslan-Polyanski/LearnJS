
// Реализуйте функцию makeTurn(), которая принимает строку left или right 
// и перемещает черепашку вперед-назад по одномерному массиву 
// фиксированного размера с пятью элементами. 
// Если черепашка выходит за пределы массива, то выбрасывается исключение.

type Turtle = 'turtle' | null;

type Game = {
  makeTurn: (direction: 'left' | 'right') => void;
  state: Array<Turtle>;
};

const startGame = (): Game => {
  const state: Array<Turtle> = ['turtle', null, null, null, null];

  const makeTurn = (direction: 'left' | 'right'): void => {
    let result: number;
    const leng = state.length;

    if (direction === 'left') {
      result = state.indexOf('turtle');
      if (!result) {
        throw new Error('Error length: our turtle get out array left')
      } else {
        state[result - 1] = 'turtle';
        state[result] = null;
      }
    }

    if (direction === 'right') {
      result = state.indexOf('turtle');
      if (result === leng - 1) {
        throw new Error('Error length: our turtle get out array rihgt')
      } else {
        state[result + 1] = 'turtle';
        state[result] = null;
      }
    }
  }

  return { makeTurn, state };
};

const { makeTurn, state } = startGame();


console.log(state); // ['turtle', null, null, null, null]

makeTurn('left') // ERROR

makeTurn('right');
makeTurn('right');

console.log(state); // [null, null, 'turtle', null, null]