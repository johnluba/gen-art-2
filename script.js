
// Color palette from the image
const colors = {
  orange: [255, 140, 0],
  lightOrange: [255, 170, 80],
  red: [220, 60, 50],
  burgundy: [160, 30, 60],
  blue: [30, 60, 110],
  lightBlue: [100, 140, 180],
  navy: [20, 30, 60],
  cream: [250, 240, 225],
  black: [20, 20, 20],
  gray: [150, 150, 150],
  lightGray: [200, 200, 200],
  pink: [230, 120, 150],
  beige: [245, 230, 210]
};

// Animation duration in frames (15 seconds at 60fps)
const ANIMATION_DURATION = 900;
let frameCount = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  background(colors.cream);
  smooth();
}

function draw() {
  // Update frame count
  frameCount = (frameCount + 1) % ANIMATION_DURATION;
  const progress = frameCount / ANIMATION_DURATION;
  
  // Clear background
  background(colors.cream);
  
  // Draw grid lines
  stroke(220);
  strokeWeight(0.5);
  for (let i = 0; i < width; i += 40) {
    line(i, 0, i, height);
  }
  for (let i = 0; i < height; i += 40) {
    line(0, i, width, i);
  }
  
  // Set origin to center for easier positioning
  push();
  translate(width/2, height/2);
  
  // Draw all components
  drawBackgroundElements(progress);
  drawLargeCircles(progress);
  drawRectangles(progress);
  drawSmallCircles(progress);
  drawConnectingLines(progress);
  drawDetailElements(progress);
  
  pop();
}

function drawBackgroundElements(progress) {
  // Thin lines across the canvas
  stroke(colors.lightGray);
  strokeWeight(0.3);
  for (let i = -10; i < 10; i += 2) {
    const offset = sin(progress * TWO_PI + i) * 5;
    line(-400, i * 30 + offset, 400, i * 30 - offset);
    line(i * 30 + offset, -300, i * 30 - offset, 300);
  }
}

function drawLargeCircles(progress) {
  // Main concentric circle on the left (most prominent)
  push();
  translate(-150 + sin(progress * TWO_PI) * 5, 0);
  noFill();
  stroke(colors.black);
  strokeWeight(2);
  ellipse(0, 0, 140, 140);
  
  // Concentric rings
  for (let i = 0; i < 3; i++) {
    stroke(i % 2 === 0 ? colors.gray : colors.orange);
    strokeWeight(1.5 - i * 0.3);
    ellipse(0, 0, 110 - i * 25, 110 - i * 25);
  }
  
  // Inner circle with content
  fill(colors.cream);
  noStroke();
  ellipse(0, 0, 50, 50);
  
  // Small dark center
  fill(colors.navy);
  ellipse(0, 0, 15, 15);
  pop();
  
  // Large concentric circle on bottom right
  push();
  translate(70 + cos(progress * TWO_PI) * 8, 100 + sin(progress * TWO_PI) * 8);
  
  // Blue outer ring
  noFill();
  stroke(colors.blue);
  strokeWeight(8);
  const rotation = progress * TWO_PI;
  arc(0, 0, 130, 130, rotation, rotation + PI * 1.5);
  
  // Navy middle ring
  stroke(colors.navy);
  strokeWeight(6);
  ellipse(0, 0, 95, 95);
  
  // Orange inner ring
  stroke(colors.orange);
  strokeWeight(7);
  arc(0, 0, 65, 65, rotation + PI, rotation + TWO_PI);
  
  // Center dot
  fill(colors.black);
  noStroke();
  ellipse(0, 0, 15, 15);
  pop();
  
  // Upper right circle with eye-like appearance
  push();
  translate(180, -120);
  noFill();
  stroke(colors.gray);
  strokeWeight(1);
  ellipse(0, 0, 60, 60);
  
  // Inner ring
  stroke(colors.lightOrange);
  ellipse(0, 0, 40, 40);
  
  // Center "pupil"
  fill(colors.black);
  noStroke();
  ellipse(0, 0, 10, 10);
  pop();
  
  // Bottom left circle
  push();
  translate(-200 + sin(progress * TWO_PI) * 10, 150);
  fill(colors.red);
  noStroke();
  arc(0, 0, 70, 70, 0, PI);
  pop();
}

function drawRectangles(progress) {
  // Central rectangular structure
  push();
  translate(0, 0);
  rotate(progress * 0.1);
  
  // Main gray rectangular frame
  noFill();
  stroke(colors.gray);
  strokeWeight(2);
  rect(-120, -100, 240, 200);
  
  // Orange rectangle
  fill(colors.orange);
  noStroke();
  rect(-180, -80, 60, 100 + sin(progress * TWO_PI) * 10);
  
  // Red rectangle
  fill(colors.burgundy);
  rect(-100, 20, 50, 80);
  
  // Pink accent
  fill(colors.pink);
  rect(-100, -40, 30, 20);
  
  // Blue vertical rectangle
  fill(colors.blue);
  rect(40, -80, 80, 160);
  
  // Navy square
  fill(colors.navy);
  rect(-40, -150, 70, 70);
  
  // Small orange squares (like in the source image)
  fill(colors.orange);
  for (let i = 0; i < 3; i++) {
    const size = 20;
    rect(100, 10 + i * 30, size, size);
  }
  
  pop();
  
  // Right side vertical orange bar
  push();
  translate(150, -20);
  fill(colors.orange);
  noStroke();
  rect(0, 0, 30, 170);
  pop();
  
  // Left side red rectangle
  push();
  translate(-240, 30);
  fill(colors.red);
  noStroke();
  rect(0, 0, 40, 70);
  pop();
}

function drawSmallCircles(progress) {
  // Small black dots scattered around
  for (let i = 0; i < 15; i++) {
    const angle = i * TWO_PI / 15 + progress * TWO_PI;
    const radius = 200 + sin(progress * TWO_PI * 2 + i) * 20;
    const x = cos(angle) * radius;
    const y = sin(angle) * radius;
    
    fill(colors.black);
    noStroke();
    ellipse(x, y, 4, 4);
  }
  
  // Small orange circles with animation
  for (let i = 0; i < 3; i++) {
    const offset_x = -220 + i * 110;
    const offset_y = -180 + sin(progress * TWO_PI + i) * 15;
    
    fill(colors.orange);
    noStroke();
    ellipse(offset_x, offset_y, 15, 15);
  }
  
  // Black dots in a pattern
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 2; j++) {
      if ((i + j) % 3 === 0) {
        const x = -250 + i * 50;
        const y = 200 + j * 30;
        
        fill(colors.black);
        noStroke();
        ellipse(x, y, 3, 3);
      }
    }
  }
}

function drawConnectingLines(progress) {
  // Main horizontal line through center
  stroke(colors.black);
  strokeWeight(1.5);
  line(-width/2, 0, width/2, 0);
  
  // Angled lines with animation
  for (let i = 0; i < 8; i++) {
    const angle = i * PI/8 + progress * 0.2;
    const length = 300;
    const start_radius = 50;
    
    const x2 = cos(angle) * length;
    const y2 = sin(angle) * length;
    
    const x1 = cos(angle) * start_radius;
    const y1 = sin(angle) * start_radius;
    
    stroke(colors.gray);
    strokeWeight(0.8);
    line(x1, y1, x2, y2);
  }
  
  // Dotted lines (multiple)
  push();
  drawDottedLine(-200, 150, 200, 150, 5, progress * 10);
  drawDottedLine(150, -150, -150, -150, 5, progress * 10);
  drawDottedLine(-200, -50, -200, 150, 5, progress * 8);
  drawDottedLine(200, 50, 200, -150, 5, progress * 8);
  pop();
}

function drawDetailElements(progress) {
  // Half circles on the left edge
  push();
  translate(-250, 0);
  fill(colors.red);
  noStroke();
  arc(0, 0, 40, 40, PI/2, PI * 3/2);
  pop();
  
  // Thin arcs that connect elements
  push();
  noFill();
  stroke(colors.lightGray);
  strokeWeight(1);
  
  // Large arcs connecting major elements
  arc(-50, -50, 300, 300, 0, PI * progress);
  arc(50, 50, 250, 250, PI, TWO_PI * progress);
  
  // Small angular details
  for (let i = 0; i < 6; i++) {
    const angle = i * PI / 3;
    push();
    translate(cos(angle) * 170, sin(angle) * 170);
    rotate(angle + progress * TWO_PI);
    line(0, 0, 15, 15);
    line(0, 0, -15, 15);
    pop();
  }
  pop();
  
  // Diamond shapes
  push();
  translate(0, -200);
  fill(colors.black);
  noStroke();
  drawDiamond(0, 0, 10 + sin(progress * TWO_PI) * 3);
  pop();
  
  push();
  translate(-220, -100);
  fill(colors.black);
  noStroke();
  drawDiamond(0, 0, 8);
  pop();
  
  // Vertical line elements
  for (let i = -3; i < 4; i++) {
    const x = i * 60;
    const height = 40 + sin(progress * TWO_PI + i) * 10;
    
    if (Math.abs(i) % 2 === 1) {
      stroke(colors.navy);
      strokeWeight(3);
      line(x, 180, x, 180 - height);
    }
  }
}

function drawDiamond(x, y, size) {
  beginShape();
  vertex(x, y - size);
  vertex(x + size, y);
  vertex(x, y + size);
  vertex(x - size, y);
  endShape(CLOSE);
}

function drawDottedLine(x1, y1, x2, y2, spacing, offset) {
  const length = dist(x1, y1, x2, y2);
  const direction = createVector(x2 - x1, y2 - y1).normalize();
  
  const num_dots = int(length / spacing);
  
  for (let i = 0; i < num_dots; i++) {
    const pos = (i + offset) % num_dots;
    const x = x1 + direction.x * pos * spacing;
    const y = y1 + direction.y * pos * spacing;
    
    fill(colors.black);
    noStroke();
    ellipse(x, y, 2, 2);
  }
}

function mousePressed() {
  // Empty placeholder for mouse pressed function
}

function keyPressed() {
  if (key === ' ') {
    console.log("Animation restarted");
    frameCount = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
