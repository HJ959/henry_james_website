// Initialize Zfont
Zfont.init(Zdog);

// Create a Zdog illustration
let illo = new Zdog.Illustration({
    element: '.zdog-svg',
    // enable rotating scene with dragging
	dragRotate: true,
	onDragStart: function() {
		isSpinning = false;
	}
});

// Set up a font to use
let myFont = new Zdog.Font({
  src: './media/font/Staatliches-Regular.ttf'
});

var colours = ['#8CFAEB', '#8CD3FA', '#8CFAB4'];
var sentences = ["It's gonna\nbe okay.", "Chin up m8", "Deep breathes",
                 "Just relax.", "There's always\na last time.", "There's always\na first time.",
                 "Think of all the\nthings you're\ngrateful for."];
var max_sentences = sentences.length;

// Create a text object
// This is just a Zdog.Shape object with a couple of extra parameters!
new Zdog.Text({
  addTo: illo,
  font: myFont,
  value: sentences[getRandomInt(0, max_sentences)],
  fontSize: 32,
  stroke: 3,
  color: '#FF9393'
});

// square
new Zdog.Rect({
  addTo: illo,
  width: getRandomInt(60,240),
  height: getRandomInt(60,240),
  translate: { z: -getRandomInt(20,40) },
  stroke: getRandomInt(3,12),
  color: colours[getRandomInt(0,2)],
  fill: false,
});

function draw(input_x, input_y, width, height) {
  var leftToRight = Math.random() >= 0.5;
  
  if(leftToRight) {
    new Zdog.Shape({
      addTo: illo,
      path: [
        { x: input_x, y: input_y, z: getRandomInt(-2,2) }, 
        { x:  input_x + width, y: input_y + height, z: getRandomInt(-1,2) }, 
      ],
      translate: { y: 10, z: -10},
      closed: false,
      stroke: getRandomInt(1,3),
      color: colours[getRandomInt(0,2)],
      });
  } else {
    new Zdog.Shape({
      addTo: illo,
      path: [
        { x: input_x + width, y: input_y}, 
        { x:  input_x, y: input_y + height, z: getRandomInt(-1,1) }, 
      ],
      translate: { y: 10, z: -10},
      closed: false,
      stroke: getRandomInt(1,3),
      color: colours[getRandomInt(0,2)],
      });
  }
};

var svg_canvas   = document.getElementById("itsgonnabeokay-svg"); // or other selector like querySelector()
var rect = svg_canvas.getBoundingClientRect(); // get the bounding rectangle

var size = getRandomInt(50,100);
var step = Math.round(size / 10);
var dpr = window.devicePixelRatio;

for(var x = 0; x < size; x += step) {
  for(var y = 0; y < size; y+= step) {
    draw(x, y, step, step);    
  }
}

// Animation loop
function animate() {

  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}
animate();