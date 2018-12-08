class GrassEater extends LivingCreature {
    constructor(x, y, index){
        super(x, y, index);
        this.energy = Math.round(Math.random() * 8);
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

   chooseCell(character) {
       this.getNewCoordinates();
       return super.chooseCell(character);
   }

   move() {
       var cell = random(this.chooseCell(0));
       if (cell && this.multiply >= this.speed / 4) {
           this.energy--;
           matrix[this.y][this.x] = 0;
           this.x = cell[0]; this.y = cell[1];
           matrix[this.y][this.x] = 2;
           this.multiply = 0;
       }
   }

   eat() {
       this.energy--;
       this.multiply++;
       var cell = random(this.chooseCell(1));
       if (cell && this.multiply >= this.speed / 4) {
           this.energy += this.speed;
           matrix[this.y][this.x] = 0;
           this.x = cell[0]; this.y = cell[1];
           matrix[this.y][this.x] = 2;
           for (var i in grassArr) {
               if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                   grassArr.splice(i, 1);
               }
           }
       }
       else this.move();
   }

   mul() {
       var cell = random(this.chooseCell(0));
       if (cell && this.energy >= this.speed) {
           this.energy = 1;
           var newGrassEater = new GrassEater(cell[0], cell[1], 2);
           grassEaterArr.push(newGrassEater);
       }
   }

   die() {
       if (this.energy <= -(this.speed / 2)) {
           matrix[this.y][this.x] = 0;
           for (var i in grassEaterArr) {
               if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y) {
                   grassEaterArr.splice(i, 1);
               }
           }
       }
   }
}
module.exports = GrassEater;
