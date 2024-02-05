
// Создайте дату
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. 
// Временная зона – местная.
// Для вывода используйте alert.

() => {

  const date = new Date(2012, 1, 20, 3, 12)
  alert(date)

};



// Покажите день недели
// Напишите функцию getWeekDay(date), показывающую день недели 
// в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

() => {

  function getWeekDay(date) {
    const arrayDays = [
      [0, 'ВС'], 
      [1, 'ПН'], 
      [2, 'ВТ'], 
      [3, 'СР'], 
      [4, 'ЧТ'], 
      [5, 'ПТ'], 
      [6, 'СБ']
    ];

    const mapDay = new Map(arrayDays);
    const num = date.getDay();
    const result = mapDay.get(num)

    return result;
  }

  let date = new Date(2012, 0, 3);  // 3 января 2012 года
  alert( getWeekDay(date) );        // нужно вывести "ВТ"

};



// День недели в европейской нумерации
// В Европейских странах неделя начинается с понедельника (день номер 1), 
// затем идёт вторник (номер 2) и так до воскресенья (номер 7). 
// Напишите функцию getLocalDay(date), которая возвращает «европейский» 
// день недели для даты date.

() => {

  function getLocalDay(date) {
    if(date.getDay() === 0) {
      return 7;
    } 

    return date.getDay();
  }

  let date = new Date(2012, 0, 3);  // 3 января 2012 года
  alert( getLocalDay(date) );       // вторник, нужно показать 2

};



// Какой день месяца был много дней назад?
// Создайте функцию getDateAgo(date, days), возвращающую число, 
// которое было days дней назад от даты date.
// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) 
// вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
// Функция должна надёжно работать при значении days=365 и больших значениях:
// Функция не должна изменять переданный ей объект date

() => {

  function getDateAgo(date, days) {
    const timestemp = date.getTime();
    const ms = days * 24 * 60 * 60 * 1000;
    const resultTime = timestemp - ms;
    const resultDate = new Date(resultTime);

    return resultDate.getDate();
  }
  
  let date = new Date(2015, 0, 2);
  
  alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
  alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
  alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

};

// Последнее число месяца?
// Напишите функцию getLastDayOfMonth(year, month), 
// возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

() => {

  function getLastDayOfMonth(year, month) {
    const date = new Date(year, month, 31);
    const result = 31 - date.getDate();

    return result || 31;
  }

  
  function getLastDayOfMonthTwo(year, month) {
    const date = new Date(year, month + 1, 0);

    return date.getDate();
  }

}






