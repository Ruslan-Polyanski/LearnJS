
() => {

  const date: Date = new Date(2012, 1, 20, 3, 12)
  alert(date)

};



() => {

  function getWeekDay(date: Date): string {
    const arrayDays: [number, string][] = [
      [0, 'ВС'], 
      [1, 'ПН'], 
      [2, 'ВТ'], 
      [3, 'СР'], 
      [4, 'ЧТ'], 
      [5, 'ПТ'], 
      [6, 'СБ']
    ];

    const mapDay: Map<number, string> = new Map(arrayDays);
    const num = date.getDay();
    const result = mapDay.get(num);

    if(typeof result === 'undefined') {
      return "This date is not true";
    }

    return result;

  }

  let date = new Date(2012, 0, 3);  // 3 января 2012 года
  alert( getWeekDay(date) );        // нужно вывести "ВТ"

};



() => {

  function getLocalDay(date: Date): number {
    if(date.getDay() === 0) {
      return 7;
    } 

    return date.getDay();
  }

  let date = new Date(2012, 0, 3);  // 3 января 2012 года
  alert( getLocalDay(date) );       // вторник, нужно показать 2

};



() => {

  function getDateAgo(date: Date, days: number): number {
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



() => {

  function getLastDayOfMonth(year: number, month: number): number {
    const date = new Date(year, month, 31);
    const result = 31 - date.getDate();

    return result || 31;
  }

  
  function getLastDayOfMonthTwo(year: number, month: number): number {
    const date = new Date(year, month + 1, 0);

    return date.getDate();
  }

}



() => {

  const getSecondsToday = (): number => {
      const dateNow: Date = new Date();
      const year = dateNow.getFullYear();
      const month = dateNow.getMonth();
      const day = dateNow.getDate();
      const clearDate = new Date(year, month, day);
      const resultTime = +dateNow - +clearDate;
      return Math.round(resultTime/1000);
  }

  getSecondsToday() == 36000 // (3600 * 10)

}



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



() => {

  const formatDate = (date: Date) => {
    const dateNow = new Date();
    const result = (+dateNow - +date)/1000;

    if(result < 1) return "прямо сейчас";
    if(result < 60) return `${result} сек. назад`;
    if(result < 3660) return (result/60) + " мин. назад";

    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    const month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    const year = date.getFullYear().toString().slice(-2);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${day}.${month}.${year} ${hours}:${minutes}`;
  }


  alert( formatDate(new Date(+new Date - 1)) ); // "прямо сейчас"

  alert( formatDate(new Date(+new Date - 30 * 1000)) ); // "30 сек. назад"
  
  alert( formatDate(new Date(+new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
  
  // вчерашняя дата вроде 31.12.2016, 20:00
  alert( formatDate(new Date(+new Date - 86400 * 1000)) );

}