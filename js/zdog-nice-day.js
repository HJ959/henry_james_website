// Initialize Zfont
Zfont.init(Zdog);

// Create a Zdog illustration
let illo = new Zdog.Illustration({
    element: '.zdog-svg',
    // enable rotating scene with dragging
	dragRotate: true,
	onDragMove: function() {
		isSpinning = false;
	},
	onDragEnd: function() {
        isSpinning = true;
    },
});

// Set up a font to use
let myFont = new Zdog.Font({
  src: './media/font/Staatliches-Regular.ttf'
});

var colours = ['#8CFAEB', '#8CD3FA', '#8CFAB4'];

// Create a text object
// This is just a Zdog.Shape object with a couple of extra parameters!
new Zdog.Text({
  addTo: illo,
  font: myFont,
  value: 'Hey, Zdog!',
  fontSize: 64,
  color: colours[getRandomInt(0, 2)]
});

// Animation loop
function animate() {
  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}
animate();