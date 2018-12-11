var LivingCreature = require("./main.js");
module.exports = class Predator extends LivingCreature{
  constructor(x,y,index) {
    super(x, y, index);
    this.energy = Math.round(Math.random() * 16);
    this.speed = 24;
    this.multiply = Math.round(Math.random() * 16);
  }

  getNewCoordinates() {
      this.directions = [
          [this.x - 1, this.y - 1],
          [this.x, this.y - 1],
          [this.x + 1, this.y - 1],
          [this.x - 1, this.y],
          [this.x + 1, this.y],
          [this.x - 1, this.y + 1],
          [this.x, this.y + 1],
          [this.x + 1, this.y + 1]
      ];
  }

  move() {
      var cell = random(this.chooseCell(0));
      if (cell && this.multiply >= this.speed / 2) {
          this.energy--;
          matrix[this.y][this.x] = 0;
          this.x = cell[0]; this.y = cell[1];
          matrix[this.y][this.x] = 3;
      }
  }

  eat() {
      this.energy--;
      var cell = random(this.chooseCell(2));
      if (cell && this.multiply >= this.speed / 2) {
          this.energy += this.speed/2;
          matrix[this.y][this.x] = 0;
          this.x = cell[0]; this.y = cell[1];
          matrix[this.y][this.x] = 3;
          for (var i in grassEaterArr) {
              if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y) {
                  grassEaterArr.splice(i, 1);
              }
          }
      }
      else this.move();
  }

  mul() {
      var cell = random(this.chooseCell(0));
      if (cell && this.energy >= this.speed) {
          this.energy = 1;
          var newPredator = new Predator(cell[0], cell[1], 3);
          predatorArr.push(newPredator);
      }
  }

  die() {
      if (this.energy <= -(this.speed / 2)) {
          matrix[this.y][this.x] = 0;
          for (var i in predatorArr) {
              if (predatorArr[i].x == this.x && predatorArr[i].y == this.y) {
                  predatorArr.splice(i, 1);
              }
          }
      }
  }
}
module.exports = Predator;
