
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



// Сколько сегодня прошло секунд?
// Напишите функцию getSecondsToday(), 
// возвращающую количество секунд с начала сегодняшнего дня.
// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
// Функция должна работать в любой день, т.е. в ней не должно быть 
// конкретного значения сегодняшней даты.

() => {

  const getSecondsToday = () => {
      const dateNow = new Date();
      const year = dateNow.getFullYear();
      const month = dateNow.getMonth();
      const day = dateNow.getDate();
      const clearDate = new Date(year, month, day);
      const resultTime = dateNow - clearDate;
      return Math.round(resultTime/1000);
  }

  getSecondsToday() == 36000 // (3600 * 10)

}



// Сколько секунд осталось до завтра?
// Создайте функцию getSecondsToTomorrow(), 
// возвращающую количество секунд до завтрашней даты.
// Например, если сейчас 23:00
// P.S. Функция должна работать в любой день, 
// т.е. в ней не должно быть конкретного значения сегодняшней даты.

() => {

  const getSecondsToTomorrow = () => {
    const dateNow = new Date();

    const hours = dateNow.getHours();
    const minutes = dateNow.getMinutes();
    const seconds = dateNow.getSeconds();

    const nowSeconds = hours*60*60 + minutes*60 + seconds;

    const fullSeconds = 60*60*24;

    return fullSeconds - nowSeconds;

  }

  getSecondsToTomorrow() == 3600

}



// Форматирование относительной даты
// Напишите функцию formatDate(date), форматирующую date по следующему принципу:
// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". 
// А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

() => {


  
  alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

  alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
  
  alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
  
  // вчерашняя дата вроде 31.12.2016, 20:00
  alert( formatDate(new Date(new Date - 86400 * 1000)) );

}





