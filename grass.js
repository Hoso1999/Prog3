var LivingCreature = require("./main.js");
module.exports  = class Grass extends LivingCreature {

  mul() {
      this.multiply++;
      this.direction = this.chooseCell(0)[ Math.floor(Math.random()*this.chooseCell(0) + this.chooseCell(0).le)];
      if (this.multiply >= this.speed && this.direction) {
          var newGrass = new Grass(this.direction[0], this.direction[1], this.index);
          newGrass.parentX = this.x;
          newGrass.parentY = this.y;
          grassArr.push(newGrass);
          matrix[this.direction[1]][this.direction[0]] = this.index;
          this.multiply = 0;
      }
  }
}

