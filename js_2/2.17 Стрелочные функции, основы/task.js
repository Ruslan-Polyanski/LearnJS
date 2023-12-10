function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);

const ask = (question, yes, no) => {
  confirm(question) ? yes() : no();
}

ask("Вы согласны?", () => alert("Вы согласились."), () => alert("Вы отменили выполнение."));