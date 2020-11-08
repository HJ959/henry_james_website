// howler section
var counter = 0;
var synth_names = ['Boulderhead - The Space Inbetween_320kbps.mp3'];
var synths = {
	synth_1: new Howl({
		src: ['media/itsgonnabeokay/Boulderhead - The Space Inbetween_320kbps.mp3'],
		volume: 0.5,
		onend: function() {
      synths.synth_1.play();
		}
	})
}

synths.synth_1.play();



// Initialize Zfont
Zfont.init(Zdog);

// Set up a font to use
let myFont = new Zdog.Font({
  src: './media/font/Staatliches-Regular.ttf'
});

var colours = ['#8CFAEB', '#8CD3FA', '#8CFAB4'];
var sentences = ["It's gonna\nbe okay.", "Chin up m8", "Deep breathes",
"Just relax.", "There's always\na last time.", "There's always\na first time.",
"Think of all the\nthings you're\ngrateful for.", "It could \nbe worse!",
"What \nnext?", "We are a \nsocial species"];
var max_sentences = sentences.length;
var max_colours = colours.length;

function itsgonnabeokayAnimate() {
  delete illo;

// Create a Zdog illustration
let illo = new Zdog.Illustration({
    element: '.zdog-svg',
    // enable rotating scene with dragging
	dragRotate: true,
	onDragStart: function() {
		isSpinning = false;
	}
});

// Create a text object
// This is just a Zdog.Shape object with a couple of extra parameters!
new Zdog.Text({
  addTo: illo,
  font: myFont,
  value: sentences[getRandomInt(0, max_sentences)],
  fontSize: 32,
  stroke: getRandomInt(1,3),
  translate: { y: -getRandomInt(1,50), z: -getRandomInt(1,50), x: -getRandomInt(30,50)},
  color: '#FF9393'
});


// square
new Zdog.Rect({
  addTo: illo,
  width: getRandomInt(60,240),
  height: getRandomInt(60,240),
  translate: { z: -getRandomInt(20,40) },
  stroke: getRandomInt(3,12),
  color: colours[getRandomInt(0,max_colours)],
  fill: false,
});

function draw(input_x, input_y, width, height, translateGen) {
  var leftToRight = Math.random() >= 0.5;
  
  if(leftToRight) {
    new Zdog.Shape({
      addTo: illo,
      path: [
        { x: input_x, y: input_y, z: getRandomInt(-2,2) }, 
        { x:  input_x + width, y: input_y + height, z: getRandomInt(-1,2) }, 
      ],
      translate: translateGen,
      closed: false,
      stroke: getRandomInt(3,5),
      color: colours[getRandomInt(0,max_colours)],
      });
  } else {
    new Zdog.Shape({
      addTo: illo,
      path: [
        { x: input_x + width, y: input_y}, 
        { x:  input_x, y: input_y + height, z: getRandomInt(-1,2) }, 
      ],
      translate: translateGen,
      closed: false,
      stroke: getRandomInt(3,5),
      color: colours[getRandomInt(0,max_colours)],
      });
  }
};

function draw2(input_x, input_y, width, height, translateGen) {
  var leftToRight = Math.random() >= 0.5;
  
  if(leftToRight) {
    new Zdog.Shape({
      addTo: illo,
      path: [
        { x: input_x, y: input_y, z: getRandomInt(-2,2) }, 
        { x:  input_x + width, y: input_y + height, z: getRandomInt(-2,2) }, 
      ],
      translate: { y: -70, x: -100, z: -70},
      closed: true,
      stroke: getRandomInt(3,5),
      color: colours[getRandomInt(0,max_colours)],
      });
  } else {
    new Zdog.Shape({
      addTo: illo,
      path: [
        { x: input_x + width, y: input_y, z: getRandomInt(-2,2)}, 
        { x:  input_x, y: input_y + height, z: getRandomInt(-2,2) }, 
      ],
      translate: { y: -70, x: -100, z: -70},
      closed: true,
      stroke: getRandomInt(3,5),
      color: colours[getRandomInt(0,max_colours)],
      });
  }
};

var svg_canvas = document.getElementById("itsgonnabeokay-canvas"); // or other selector like querySelector()
var rect = svg_canvas.getBoundingClientRect(); // get the bounding rectangle

var size = getRandomInt(50,100);
var step = Math.round(size / 5);
var size2 = getRandomInt(50,100);
var step2 = Math.round(size / 5);

var translateGen1 = { y: getRandomInt(10,20), z: -getRandomInt(10,30)};
var translateGen2 = { y: -getRandomInt(50,80), x: -getRandomInt(100,120), z: -getRandomInt(50,80)};

for(var x = 0; x < size; x += step) {
  for(var y = 0; y < size; y+= step) {
    draw(x, y, step, step, translateGen1); 
  }
}
for(var x = 0; x < size2; x += step2) {
  for(var y = 0; y < size2; y+= step2) {
    draw2(x, y, step2, step2, translateGen2); 
  }
}
var leftRightFlag = true;
var counterLeftRight = 1;
// Animation loop

var boolMouseOver = false;
var timer;

var is_touch_device = is_touch_device1()

function mouseStopped() { 
   boolMouseOver = false;
}

window.addEventListener("mousemove",function(){
    boolMouseOver = true;
    clearTimeout(timer);
    timer=setTimeout(mouseStopped,100);
});

function animate() {
  if (boolMouseOver === true && is_touch_device === false) {
    if (leftRightFlag === true) {
     illo.rotate.y += 0.2;
     illo.rotate.z += 0.2;
    }  
   if (leftRightFlag === false) {
     illo.rotate.y -= 0.02;
     illo.rotate.z -= 0.02;
   }
   illo.updateRenderGraph();
    counterLeftRight++;

    if (counterLeftRight > getRandomInt(1, 5)) {
     leftRightFlag = !leftRightFlag;
     counterLeftRight = 0;
    }
  }
  requestAnimationFrame(animate);
}
animate();
}