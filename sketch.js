function setup() {
  createCanvas(windowWidth, windowHeight) .position(0,0) .style('z-index',-1);
  createA('https://github.com/Mirlhyn','Bienvenido a mi cuenta','_blank').id('yo');
  textSize(50);
  
}

function draw() {
  text("👧🏻", mouseX, mouseY)
}

function windowResized() {
  resizeCanvas (windowWidth, windowHeight);
}
  
  


  
  