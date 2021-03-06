function Laser(x, y) {
  this.x = x;
  this.y = y;
  this.r = 8;
  this.toDelete = false;

  this.show = function() {
    noStroke();
    fill(150, 0, 255);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

  this.evap = function() {
    this.toDelete = true;
  }

  this.hits = function(luke) {
    var d = dist(this.x, this.y, luke.x, luke.y);
    if (d < this.r + luke.r) {
      return true;
    } else {
      return false;
    }
  }

  this.move = function() {
    this.y = this.y - 5;
  }
}
