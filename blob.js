function Blob(x, y, r) {
  this.pos = createVector(x, y);
  this.r = r;
  this.vel = createVector(0, 0);

  this.update = function () {
    let newVel = createVector(mouseX - width / 2, mouseY - height / 2);
    newVel.setMag(3);
    this.vel.lerp(newVel, 0.2);
    this.pos.add(this.vel);
  };

  this.eats = function (other) {
    let d = p5.Vector.dist(this.pos, other.pos);
    if (d < this.r + other.r) {
      let sum = this.r * this.r + other.r * other.r;
      this.r = sqrt(sum);
      //this.r += other.r;
      return true;
    }
    return false;
  };

  this.show = function () {
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
  };
}
