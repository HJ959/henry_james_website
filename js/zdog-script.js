// zdog-demo.js
// rotating flag variable
let isSpinning = true;
// create illo
let illo = new Zdog.Illustration({
    // set canvas with selector
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
  var counter = 0;


  var synths = new Howl({
    src: ['media/Ts_idiot_Collab/synth_4.mp3', 
          'media/Ts_idiot_Collab/synth_3.mp3', 
          'media/Ts_idiot_Collab/synth_2.mp3'],
    autoplay: true,
    loop: true,
    volume: 1.0,
    onend: function() {
      console.log('Finished!');
    }
  });

  var robos = new Howl({
    src: ['media/Ts_idiot_Collab/Isambard.mp3', 
          'media/Ts_idiot_Collab/Mean_girls.mp3', 
          'media/Ts_idiot_Collab/Netflic_and_chill.mp3'],
    autoplay: true,
    loop: true,
    volume: 1.0,
    onend: function() {
      counter = 0;
      for (var robo in robos) {
        // skip loop if the property is from prototype
        if(!robos.hasOwnProperty(robo)) continue;
        robos[getRandomInt(0,3)].play();
      }
    }
  });
  
  synths.play();
  robos.play();

  var rand = 0;
  let polyOne, polyTwo;
  
  var colours = ['#D8F9F7','#D8EBF9','#D8F9E7'];
  var true_false = [true, false];
  function animate() {
    // rotate illo each frame
      // add circle
      
      if (counter < 5) {
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
      closed: true_false[getRandomInt(0,2)],
      stroke: getRandomInt(0,4),
      color: colours[getRandomInt(0,3)],
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