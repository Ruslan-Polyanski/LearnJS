// Реализуйте функцию lessonsCount(), которая принимает на вход 
// курс и возвращает количество лекций внутри него:

type TCourse = {
  lessons: string[]
}

function lessonsCount({lessons}: TCourse): number {
  return lessons.reduce((acc, item) => acc += 1, 0);
}

const course = { lessons: ['intro', 'lala'] };
lessonsCount(course); // 2