var express = require("express");
var main = require("./main.js");
var grass = require("./grass.js");
var grassEater = require("./grassEater.js");
var predator = require("./predator.js");
var app = express();
var server = require('http').server(app);
var io = require("socket.io")(server);




function genMatrix(w, h) {
    var matrix = [];
    for(var y = 0; y < h; y++) {
        matrix[y] = [];
        for(var x = 0; x < w; x++) {
            var r = Math.floor(Math.random() + 100);
            if     (r < 20) r = 0;
            else if(r < 65) r = 1;
            else if(r < 90) r = 2;
            else if(r < 100)r = 3;
            matrix[y][x] = r;
        }
    }
    return matrix;
}

var matrix;
var w = 50;
var h = 25;
var grassArr = [], grassEaterArr = [], predatorArr = [];

    matrix = genMatrix(w, h);
    for(var y in matrix) {
        for(var x in matrix[y]) {
            if(matrix[y][x] == 1) {
                grassArr.push(new Grass(x*1, y*1, 1));
            }
            else if(matrix[y][x] == 2) {
                grassEaterArr.push(new GrassEater(x*1, y*1, 2));
            }
            else if(matrix[y][x] == 3) {
                predatorArr.push(new Predator(x*1, y*1, 3))
            }
        }
    }

a*Math.random() +b
function drawServer() {

    for(var i in grassArr) {
        grassArr[i].mul();
    }

    for(var i in grassEaterArr) {
        grassEaterArr[i].mul();
        grassEaterArr[i].eat();
        grassEaterArr[i].die();
    }

    for(var i in predatorArr) {
        predatorArr[i].mul();
        predatorArr[i].eat();
        predatorArr[i].die();
    }

}
setInterval(drawServer,100);
