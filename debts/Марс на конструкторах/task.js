
function Spacecraft(name, fuelType) {
  this.name = name; // Имя корабля
  this.fuelType = fuelType; // Тип топлива
  this.fuelLevel = 100; // Уровень топлива
  this.isInSpace = false; // Карабль в космосе или нет
  this.launch = function() { // Взлет
    this.fuelLevel -= 10;
    this.isInSpace = true;
  };
  this.land = function(destination) { // Посадка
    if(destination === 'Mars') {
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
  this.move = function(direction) { // Перемещение
    this.navigation.x = direction.x;
    this.navigation.y = direction.y;
  };
  this.collectData = function(dataType) { // Собирает данные заданного типа и ложит в массив
    this.dataCollected = [...this.dataCollected, dataType]
  };
  this.sendDataToEarth = function() { // отправляет собранные данные и очищает массив
    this.dataCollected.length = 0;
  };
}

const mySpacecraft = new Spacecraft('Ruslan Plane', 'Oil');
const marsRover = new MarsRover('R1TU', {x: 0, y: 0});

if(!mySpacecraft.isInSpace) {
  mySpacecraft.launch()
  console.log(mySpacecraft.checkFuel())
  mySpacecraft.land('Mars')
  console.log(mySpacecraft.checkFuel())
  mySpacecraft.refuel(30)
  marsRover.move({x: 30, y: 50})
  marsRover.collectData('Tree')
  marsRover.move({x: 40, y: 60})
  marsRover.collectData('Gras')
  console.log(mySpacecraft.checkFuel())
  marsRover.sendDataToEarth(marsRover.dataCollected)
  console.log(mySpacecraft.checkFuel())
}



// function MissionControl(missionName, launchDate) {
//       this.missionName = missionName;
//       this.launchDate = launchDate;
//       this.spaceCraft = mySpacecraft;
//       this.marsRover = marsRover;
//       this.initiateLaunch = function() {
//         this.spaceCraft.launch()
//       };
//       this.deployMarsRover = function(direction) {
//         this.marsRover.move(direction)
//       };
//       this.coorginateMission = function(dataType) {
//         this.marsRover.collectData(dataType)
//       };
//       this.monitorMissionProgress = function() {
//         const name = this.spaceCraft.name;
//         const fuelType = this.spaceCraft.fuelType;
//         const fuelLevel = this.spaceCraft.fuelLevel;
//       };
// }




