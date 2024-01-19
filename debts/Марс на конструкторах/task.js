
function Spacecraft(name, fuelType) {
  this.name = name; // Имя корабля
  this.fuelType = fuelType; // Тип топлива
  this.fuelLevel = 100; // Уровень топлива
  this.isInSpace = false; // Карабль в космосе или нет
  this.isSystemLaunch = false; // Системы коробля запущены или нет
  this.launch = function() { // Взлет
    this.fuelLevel -= 10; // тратим топливо на взлет
    this.isInSpace = true; // мы в пространстве
  };
  this.flight = function(distance) { // летим на нужное расстояние в нужную точну
    if(distance < 40) {
      this.fuelLevel -= distance;
    } else {
      console.log('Не достаточно топлива для полета на объект и вазвращения на Землю')
    }
  }
  this.land = function(destination) { // Посадка на марс или землю
    if(destination === 'Mars') {
      this.fuelLevel -= 10;
      this.isInSpace = false;
    }
    if(destination === 'Земля') {
      this.fuelLevel -= 10;
      this.isInSpace = false;
    }
  };
  this.checkFuel = function() { // Проверка топлива
    return this.fuelLevel;
  };
  this.refuel = function(amount) { // Заправка топливом
    this.fuelLevel + amount > 100 
      ? this.fuelLevel = 100 
      : this.fuelLevel += amount;
  };
}

function MarsRover(model, navigation) {
  this.model = model; // Модель марсохода
  this.navigation = navigation; // Система навигации
  this.dataCollected = []; // Собранные данные
  this.isInTerrene = false; // Марсоход на поверхности или нет
  this.move = function(direction) { // Перемещение
    this.navigation.x = direction.x;
    this.navigation.y = direction.y;
  };
  this.collectData = function(dataType) { // Собирает данные заданного типа и ложит в массив
    if(dataType === 'stone') {
      this.dataCollected = [...this.dataCollected, dataType]
    }
  };
  this.sendDataToEarth = function() { // отправляет собранные данные и очищает массив
    setTimeout(() => {
      console.log(this.dataCollected.toString())
      this.dataCollected.length = 0;
    }, 5000)
  };
}

function MissionControl(missionName, launchDate) {
      this.missionName = missionName; // название миссии
      this.launchDate = launchDate; // дата запуска
      this.spaceCraft = mySpacecraft; // экземпляр космического карабля
      this.marsRover = marsRover; // экземпляр марсохода
      this.initiateLaunch = function() { // инициирует запуск космического коробля
        this.spaceCraft.isSystemLaunch = true; // запускаем системы
      };
      this.deployMarsRover = function(direction) { // распологает марсоход на поверхности марса
        this.marsRover.isInTerrene = true;
      };
      this.coorginateMission = function(dataType) { // координирует миссию включая исследование марсохода
        if(dataType === 'stone') {
          console.log(this.marsRover.dataCollected)
        }
      };
      this.monitorMissionProgress = function() { // отслеживает и выводит прогресс
        const name = this.spaceCraft.name;
        const fuelType = this.spaceCraft.fuelType;
        const fuelLevel = this.spaceCraft.fuelLevel;
        console.log(`Имя ${name}, вид топлива ${fuelType}, уровень топлива ${fuelLevel}`)
      };
}

const mySpacecraft = new Spacecraft('Mars Plane', 'Nuclear fuel');
const marsRover = new MarsRover('M1TU', {x: 0, y: 0});
const missionControl = new MissionControl('Марс 1', '26.01.2024');

if(!mySpacecraft.isInSpace) { // если мы на поверхности
  if(!mySpacecraft.isSystemLaunch) { // системы коробля запущены или нет
    missionControl.initiateLaunch() // запускаем системы коробля
    console.log(mySpacecraft.checkFuel()) // проверка топлива до запуска
    mySpacecraft.launch() // взлет
    console.log(mySpacecraft.checkFuel()) // проверка топлива
    mySpacecraft.flight(30) // летим на марс
    console.log(mySpacecraft.checkFuel()) // проверка топлива
    mySpacecraft.land('Mars') // приземление на Марсе
    console.log(mySpacecraft.checkFuel()) // проверка топлива
    mySpacecraft.refuel(30) // заправка бака топилвом из запасных источников
    console.log(mySpacecraft.checkFuel()) // проверка топлива
    if(!marsRover.isInTerrene) {
      missionControl.initiateLaunch() // спускаем марсоход на поверхность
    }
    marsRover.move({x: 30, y: 50}) // перемещение марсохода в нужную координату
    marsRover.collectData('Tree') // подбираем дерево но не собираем в массив
    marsRover.move({x: 40, y: 60}) // едем дальше марсоходом
    marsRover.collectData('stone') // подбираем каменную породу, ложим в массив
    missionControl.monitorMissionProgress() // выводит некоторые данные
    missionControl.coorginateMission('stone') // показывает содержимое массива
  }
}




