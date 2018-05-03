// Zach Grafton
// Classic Space Invaders game utilizing p5.js

var ship;
var lukes = [];
var lasers = [];

function setup() {
  createCanvas(400, 450);
  ship = new Ship();

  for (var i = 0; i < 4; i++) {
    lukes[i] = new Luke(i * 80 + 80, 60); // dimensions space the lukes out
  }
}

function draw() {
  background(31);
  ship.show();
  ship.move();

  for (var i = 0; i < lukes.length; i++) {
    lukes[i].show();
    lukes[i].move();
  }

  var edge = false;
  for (var i = 0; i < lukes.length; i++) {
    if (lukes[i].x > width ||lukes[i].x < 0) {
      edge = true;
    }
  }

  if (edge) {
    for (var i = 0; i < lukes.length; i++) {
      lukes[i].shiftDown();
    }
  }

  for (var i = 0; i < lukes.length; i++) {
    if (lukes[i].shiftTally > 2) {
        lukes[i].show();
        lukes[i].move();
      }
    //track dimensions of lukes to see if it hits bottom
    if (lukes[i].shiftTally > 10) {
      setup(); // game over
    }
  }

  for (var i = 0; i < lasers.length; i++) {
    lasers[i].show();
    lasers[i].move();
    for (var j = 0; j < lukes.length; j++) {
      if (lasers[i].hits(lukes[j])) {
        lasers[i].evap();
        lukes[j].grow();
      }
    }
  }

  for (var i = lukes.length-1; i >= 0; i--) {
    if (lukes[i].health < 1) {
      lukes[i].evap();
    }
  }
  for (var i = lukes.length-1; i >= 0; i--) {
    if (lukes[i].toDelete) {
      lukes.splice(i, 1);
    }
  }
  for (var i = lasers.length-1; i >= 0; i--) {
    if (lasers[i].toDelete) {
      lasers.splice(i, 1);
    }
  }
}

function keyPressed() {
  if (key === ' ') {
    var laser = new Laser(ship.x, height);
    lasers.push(laser);
  }
  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}
