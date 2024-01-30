
// Хранение отметок "не прочитано"

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

const isShowText = new WeakSet();

isShowText.add(messages[0])
isShowText.add(messages[1])
isShowText.add(messages[0])

console.log("Read message 0? - " + isShowText.has(messages[0])) // true

messages.shift();


// символьное свойство вместо имени, которое известно только нашему коду
let isRead = Symbol("isRead");
messages[0][isRead] = true;


// Хранение времени прочтения
// Есть массив сообщений такой же, как и в предыдущем задании.
// Теперь вопрос стоит так: какую структуру данных вы бы предложили 
// использовать для хранения информации о том, когда сообщение было прочитано?
// В предыдущем задании нам нужно было сохранить только факт прочтения «да или нет». 
// Теперь же нам нужно сохранить дату, и она должна исчезнуть 
// из памяти при удалении «сборщиком мусора» сообщения.

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

const weakMapDate = new WeakMap();

const dateReadMessage = (message) => {
  if(!weakMapDate.has(message)) {
    weakMapDate.set(message, new Date())
  }

  return weakMapDate.get(message);
}

dateReadMessage(messages[0])
dateReadMessage(messages[1])
dateReadMessage(messages[0])



