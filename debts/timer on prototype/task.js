
() => {

  // Реализовать функцию конструктор Timer, 
  // с методами в прототипе start, pause, reset, 
  // time - сколько прошло времени в формате 00:00:00 
  // (для разных таймеров разное время)

  function Timer() {
    this._start = null;
    this._timerId = null;
    this._time = 0;

    Object.defineProperty(this, 'time', {
      get: function() {
        const ms = this._time;
        const seconds = Math.floor(ms / 1000);
        const minutes = Math.floor(ms / 60000);
        const hours = Math.floor(ms / 3600000);
        return `${hours}:${minutes % 60}:${seconds % 60}`;
      }
    })
  }

  Timer.prototype.start = function() {

      const tick = () => {
        if(!this._start) {
          this._start = Date.now() - this._time;
        }
        this._time = (Date.now() - this._start);
        this._timerId = setTimeout(tick, 1000);
      };
  
      this._timerId = setTimeout(tick, 1000);

  }

  Timer.prototype.pause = function() {
    clearTimeout(this._timerId)
    this._timerId = null;
    this._start = null;
  }

  Timer.prototype.reset = function() {
    this._start = null;
    this._time = 0;
  }

  const timer1 = new Timer();
  const timer2 = new Timer();

  const intervalId1 = setInterval(() => {
    console.log('timer1: ' + timer1.time)
  }, 1000)

  const intervalId2 = setInterval(() => {
    console.log('timer2: ' + timer2.time)
  }, 1000)

  timer1.start()

  timer1.pause()

  timer2.start()

  timer2.reset()

  timer1.start()

  timer1.pause()

  timer1.reset()

  timer1.start()

  timer1.reset()

}