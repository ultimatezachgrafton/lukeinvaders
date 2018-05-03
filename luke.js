function Luke(x, y) {
  this.x = x;
  this.y = y;
  this.r = 30
  this.xdir = 1;
  this.health = 3;
  this.shiftTally = 0;

  this.grow = function() {
    this.r = this.r * 1.5;
    this.health--;
  }

  this.evap = function() {
    this.toDelete = true;
  }

  this.shiftDown = function() {
    this.xdir *= -1;
    this.y += this.r;
    this.shiftTally++;
  }

  this.move = function() {
    this.x = this.x + this.xdir;
  }

  this.show = function() {
    noStroke();
    fill(255, 0, 200, 150);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }
}
