// Создайте страницу, которая спрашивает имя у пользователя и выводит его.

const userName = prompt('How is your name?', '');

if(userName){
  alert(userName)
} else {
  alert('Вы не ввели имя!')
}
