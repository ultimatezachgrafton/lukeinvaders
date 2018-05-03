function Ship() {
  this.x = width/2;
  this.xdir = 0;
  this.y = 10;

  this.show = function() {
    fill(255); // white ship
    rectMode(CENTER);
    rect(this.x, height-20, 20, 60); // ship dimensions
  }

  this.setDir = function(xdir) {
    this.xdir = xdir;
  }

  this.move = function() {
    this.x += this.xdir*5;
    this.x = constrain(this.x, 0, width);
  }
}
