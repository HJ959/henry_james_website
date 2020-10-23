// Initialize Zfont
Zfont.init(Zdog);

// Create a Zdog illustration
let illo = new Zdog.Illustration({
    element: '.zdog-svg',
});

// Set up a font to use
let myFont = new Zdog.Font({
  src: './media/font/Staatliches-Regular.ttf'
});

// Create a text object
// This is just a Zdog.Shape object with a couple of extra parameters!
new Zdog.Text({
  addTo: illo,
  font: myFont,
  value: 'Hey, Zdog!',
  fontSize: 64,
  color: '#fff'
});

// Animation loop
function animate() {
  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}
animate();