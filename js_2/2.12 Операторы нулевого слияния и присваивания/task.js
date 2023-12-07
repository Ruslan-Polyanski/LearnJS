let userAge = 18;

userAge ??= alert("не сработает");
userAge ??= 21;
userAge ??= null;

alert(userAge)