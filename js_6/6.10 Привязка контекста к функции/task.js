
// Пишем обертку с привязкой this

() => {

  function partial(func, ...argum) {
        return function(...args) {
            return func.call(this, ...argum, ...args)
        }
    }

    let user = {
      firstName: "John",
      say(time, phrase) {
        alert(`[${time}] ${this.firstName}: ${phrase}!`);
      }
    };

    user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

    user.sayNow('Hello')

}



() => {

  // Связанная функция как метод
  // Что выведет функция?

  function f() {
    alert( this );
  }
  
  let user = {
    g: f.bind(() => {})
  };
  
  user.g(); // null

}



() => {

  // Повторный bind
  // Можем ли мы изменить this дополнительным связыванием?
  // Что выведет этот код?

  function f() {
    alert(this.name);
  }

  f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

  f(); // Вася

}


() => {

  // Свойство функции после bind
  // В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.

  function sayHi() {
    alert( this.name );
  }

  sayHi.test = 5;

  let bound = sayHi.bind({
    name: "Вася"
  });

  alert( bound.test ); 

  //  undefined, т.к. это bound - это новый обьект, новая функция

}



() => {

  // Исправьте функцию, теряющую "this"
  // Вызов askPassword() в приведённом ниже коде должен проверить пароль и 
  // затем вызвать user.loginOk/loginFail в зависимости от ответа.
  // Однако, его вызов приводит к ошибке. Почему?
  // Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

    function askPassword(ok, fail) {
      let password = prompt("Password?", '');
      if (password == "rockstar") ok();
      else fail();
    }
    
    let user = {
      name: 'Вася',
    
      loginOk() {
        alert(`${this.name} logged in`);
      },
    
      loginFail() {
        alert(`${this.name} failed to log in`);
      },
    
    };
    
    askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

}



() => {

  // Использование частично применённой функции для логина
  // Это задание является немного усложнённым вариантом одного из предыдущих – Исправьте функцию, 
  // теряющую "this".
  // Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только 
  // одна – user.login(true/false).
  // Что нужно передать в вызов функции askPassword в коде ниже, 
  // чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?

  function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'John',
  
    login(result) {
      alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };
  
  askPassword(user.login.bind(user, true), user.login.bind(user, false));

}





