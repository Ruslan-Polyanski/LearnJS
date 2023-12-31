// в user находится ссылка на объект
let user = {
  name: "John"
};

user = null;

console.log(user)

// объект лежавший ранее в user не достижим, он удален из памяти

// в user находится ссылка на объект
let user2 = {
  name: "John"
};

let admin = user2;

user2 = null;

console.log(user2)
console.log(admin)


function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman
  }
}

let family = marry({
  name: "John"
}, {
  name: "Ann"
});

console.log(family)

family = null;

// Сборка по поколениям (Generational collection) – объекты делятся на два набора: 
// «новые» и «старые». В типичном коде многие объекты имеют короткую жизнь: они появляются, 
// выполняют свою работу и быстро умирают, так что имеет смысл отслеживать новые объекты и, 
// если это так, быстро очищать от них память. Те, которые выживают достаточно долго, становятся 
// «старыми» и проверяются реже.

// Инкрементальная сборка (Incremental collection) – если объектов много, и мы пытаемся 
// обойти и пометить весь набор объектов сразу, это может занять некоторое время и привести к 
// видимым задержкам в выполнении скрипта. Так что движок делит всё множество объектов на части, 
// и далее очищает их одну за другой. Получается несколько небольших сборок мусора вместо 
// одной всеобщей. Это требует дополнительного учёта для отслеживания изменений между частями, 
// но зато получается много крошечных задержек вместо одной большой.

// Сборка в свободное время (Idle-time collection) – чтобы уменьшить возможное влияние на 
// производительность, сборщик мусора старается работать только во время простоя процессора.
