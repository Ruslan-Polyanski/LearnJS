
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


