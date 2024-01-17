
function Spacecraft(name, fuelType) {
  this.name = name;
  this.fuelType = fuelType;
  this.fuelLevel = 100;
  this.isInSpace = false;
  this.launch = function() {
    this.fuelLevel -= 10;
    this.isInSpace = true;
  };
  this.land = function(destination) {
    if(destination === 'Mars') {
      this.fuelLevel -= 10;
      this.isInSpace = false;
    }
  };
  this.checkFuel = function() {
    return this.fuelLevel;
  };
  this.refuel = function(amount) {
    this.fuelLevel + amount > 100 
      ? this.fuelLevel = 100 
      : this.fuelLevel += amount;
  };
}

function MarsRover(model, navigation) {
  this.model = model;
  this.navigation = navigation;
  this.dataCollected = [];
  this.move = function(direction) {
    this.navigation.x = direction.x;
    this.navigation.y = direction.y;
  };
  this.collectData = function(dataType) {
    this.dataCollected = [...this.dataCollected, dataType]
  };
  this.sendDataToEarth = function() {
    this.dataCollected.length = 0;
  };
}

const mySpacecraft = new Spacecraft('Ruslan Plane', 'Oil');
const marsRover = new MarsRover('R1TU', {x: 0, y: 0});


function MissionControl(missionName, launchDate) {
      this.missionName = missionName;
      this.launchDate = launchDate;
      this.spaceCraft = mySpacecraft;
      this.marsRover = marsRover;
      this.initiateLaunch = function() {
        this.spaceCraft.launch()
      };
      this.deployMarsRover = function(direction) {
        this.marsRover.move(direction)
      };
      this.coorginateMission = function() {

      };
      this.monitorMissionProgress = function() {

      };
}

const myMissionControl = new MissionControl('Go to Mars', '12.10.2024');
myMissionControl




