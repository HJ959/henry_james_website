// zdog-demo.js
// rotating flag variable
let isSpinning = true;
// create illo
let illo = new Zdog.Illustration({
    // set canvas with selector
    element: '.zdog-svg',
    // enable rotating scene with dragging
    dragRotate: true,
    onDragStart: function() {
      isSpinning = false;
    },
  });

  var sound = new Howl({
    src: ['media/Tom_Stokely_Collab/synth_4.mp3', 
          'media/Tom_Stokely_Collab/synth_3.mp3', 
          'media/Tom_Stokely_Collab/synth_2.mp3'],
    autoplay: true,
    loop: true,
    volume: 0.5,
    onend: function() {
      console.log('Finished!');
    }
  });
  
  sound.play();

  var rand = 0;
  let polyOne, polyTwo;
  var counter = 0;
  var colours = ['#D8F9F7','#D8EBF9','#D8F9E7']
  function animate() {
    // rotate illo each frame
      // add circle
      
      if (counter < 17) {
        counter += 1;
    polyOne = new Zdog.Shape({
      addTo: illo,
      path: [
        { x: getRandomInt(-120,120), y: getRandomInt(-120,120), z: getRandomInt(-120,120) },   // start
        { arc: [
          { x: getRandomInt(-120,120), y: getRandomInt(-120,120), z: getRandomInt(-120,120) }, // corner
          { x: getRandomInt(-120,120), y: getRandomInt(-120,120), z: getRandomInt(-120,120) }, // end point
        ]},
        { arc: [ // start next arc from last end point
          { x: getRandomInt(-120,120), y: getRandomInt(-120,120), z: getRandomInt(-120,120) }, // corner
          { x: getRandomInt(-120,120), y: getRandomInt(-120,120), z: getRandomInt(-120,120) }, // end point
        ]},
      ],
      closed: true,
      stroke: getRandomInt(0,4),
      color: colours[getRandomInt(0,2)],
    });
  } 

    if ( isSpinning ) {
      illo.rotate.y += 0.01;
    } 
    illo.updateRenderGraph();
    // animate next frame   
    requestAnimationFrame( animate );
  }
  // start animation
  animate();