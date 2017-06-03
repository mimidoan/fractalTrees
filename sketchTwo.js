var tree = [];
var leaves = [];
var count = 0;

var song;
var button;
var jump;
var amp;
var vol;

function setup() {
  createCanvas(400, 400);

  // a and b are respectively start and end points of tree
  var a = createVector(width / 2, height);
  var b = createVector(width / 2, height - 100);

  // create the root of the tree
  var root = new Branch(a, b);
  // point beginning of array to root
  tree[0] = root;

  song = loadSound("sounds/hotline-bling.mp3", loaded);
  amp = new p5.Amplitude();

}

function loaded() {
  button = createButton("play");
  button.mousePressed(toggleSong);
  jump = createButton("jump");
  jump.mousePressed(jumpSong);
}

function mousePressed() {

  for (var i = tree.length - 1; i >= 0; i--) {
    if (!tree[i].finished) {
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
    }
    tree[i].finished = true;
  }
  count++;

  if (count === 6) {
    for (var i = 0; i < tree.length; i++) {
      if (!tree[i].finished) {
        var leaf = tree[i].end.copy();
        leaves.push(leaf);
      }
    }
  }

}

function draw() {
  background(0);
  vol = amp.getLevel();
  col = map(vol, 0, 255, 0, 1);

  for (var i = 0; i < tree.length; i++) {
    tree[i].show();
    // tree[i].jitter();
  }

  for (var i = 0; i < leaves.length; i++) {
    fill(255, 0, 100, 100);
    noStroke();
    ellipse(leaves[i].x, leaves[i].y, 8, 8);
    leaves[i].y += random(0, 2);
  }
}



function toggleSong() {
  if(!song.isPlaying()) {
    song.play();
    button.html("pause");
  } else {
    song.pause();
    button.html("play")
  }
}

function jumpSong() {
  var len = song.duration();
  background(random(255),random(255),random(255));
  var ran = random(len);
  song.jump(ran);
  console.log(ran);
}
