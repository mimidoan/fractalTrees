function Branch(begin, end) {
  this.begin = begin;
  this.end = end;
  this.finished = false;

  this.jitter = function() {
    this.end.x += random(-1, 1);
    this.end.y += random(-1, 1);
  }

  // shows each branch of the tree
  this.show = function() {
    stroke(255);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  }

  // grows trees to right
  this.branchA = function() {
    var dir = p5.Vector.sub(this.end, this.begin);

    // rotate 30 degrees
    dir.rotate(PI / 6);
    // shorten length of vector
    dir.mult(0.67);
    // add end point of previous vector with direction
    var newEnd = p5.Vector.add(this.end, dir);
    // add new branch to end of last branch
    var b = new Branch(this.end, newEnd);
    // return new branch so it can be used in Sketch
    return b;
  }

  // grows trees to the left
  this.branchB = function() {
    var dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(-PI / 4);
    dir.mult(0.67);
    var newEnd = p5.Vector.add(this.end, dir);
    var b = new Branch(this.end, newEnd);
    return b;
  }



}
