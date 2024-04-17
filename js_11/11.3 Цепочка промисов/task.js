
() => {

  // Промисы: сравните then и catch
  // Являются ли фрагменты кода ниже эквивалентными? 
  // Другими словами, ведут ли они себя одинаково во всех обстоятельствах, 
  // для всех переданных им обработчиков?

  promise_1.then(f1).catch(f2);

  promise_2.then(f1, f2);

}