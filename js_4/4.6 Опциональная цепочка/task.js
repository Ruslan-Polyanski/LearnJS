let user = {}; // пользователь без свойства "address"

alert(user.address.street); // Ошибка!

// document.querySelector('.elem') равен null, если элемента нет
let html = document.querySelector('.elem').innerHTML; // ошибка, если он равен null

alert(user.address ? user.address.street ? user.address.street.name : null : null);

alert( user.address && user.address.street && user.address.street.name ); // undefined (без ошибки)

alert( user?.address?.street ); // undefined (без ошибки)

document.querySelector('.elem')?.innerHTML; // будет undefined, если элемента нет

user?.name = "John"; // Ошибка, не работает
// то же самое что написать undefined = "John"

