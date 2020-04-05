/*
Created by Henry James for collaboration with T.S. Idiot,
Created: 04/04/2020
Poems by T.S. Idiot
Visuals and website made by Henry James 
*/

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
var synth_names = ['synth_1', 'synth_2', 'synth_3', 'synth_4'];
var synths = {
	synth_1: new Howl({
		src: ['media/Ts_idiot_Collab/synth_1.mp3'],
		volume: 0.5,
		onend: function() {
      synths[synth_names[getRandomInt(0, 4)]].play();

		}
	}),
	synth_2: new Howl({
		src: ['media/Ts_idiot_Collab/synth_2.mp3'],
		volume: 0.5,
		onend: function() {
      synths[synth_names[getRandomInt(0, 4)]].play();
      synths[synth_names[getRandomInt(0, 4)]].play();
		}
	}),
	synth_3: new Howl({
		src: ['media/Ts_idiot_Collab/synth_3.mp3'],
		volume: 0.5,
		onend: function() {
      synths[synth_names[getRandomInt(0, 4)]].play();

		}
	}),
	synth_4: new Howl({
		src: ['media/Ts_idiot_Collab/synth_4.mp3'],
		volume: 0.5,
		onend: function() {
      synths[synth_names[getRandomInt(0, 4)]].play();
      synths[synth_names[getRandomInt(0, 4)]].play();
		}
	}),
}


var robo_names = ['isambard', 'mean_girls', 'netflic_and_chill', 'personal_pollution', 'pink_jeans'];
var robos = {
	isambard: new Howl({
		src: ['media/Ts_idiot_Collab/Isambard.mp3'],
		volume: 1.0,
		onend: function() {
			robos[robo_names[getRandomInt(0, 5)]].play();
			counter = 0;
		}
	}),
	mean_girls: new Howl({
		src: ['media/Ts_idiot_Collab/Mean_girls.mp3'],
		volume: 1.0,
		onend: function() {
			robos[robo_names[getRandomInt(0, 5)]].play();
			counter = 0;
		}
	}),
	netflic_and_chill: new Howl({
		src: ['media/Ts_idiot_Collab/Netflix_and_chill.mp3'],
		volume: 1.0,
		onend: function() {
			robos[robo_names[getRandomInt(0, 5)]].play();
			counter = 0;
		}
	}),
	personal_pollution: new Howl({
		src: ['media/Ts_idiot_Collab/Personal_pollution.mp3'],
		volume: 1.0,
		onend: function() {
			robos[robo_names[getRandomInt(0, 5)]].play();
			counter = 0;
		}
	}),
	pink_jeans: new Howl({
		src: ['media/Ts_idiot_Collab/Pink_jeans.mp3'],
		volume: 1.0,
		onend: function() {
			robos[robo_names[getRandomInt(0, 5)]].play();
			counter = 0;
		}
	}),
}

synths.synth_1.play();
robos.isambard.play();

var rand = 0;
let shape;
var colours = ['#8CFAEB', '#8CD3FA', '#8CFAB4'];
var true_false = [true, false];

function animate() {
	// rotate illo each frame
	// add circle
	if (counter < 5) {
		counter += 1;
		shape = new Zdog.Shape({
			addTo: illo,
			path: [{
					x: getRandomInt(-120, 120),
					y: getRandomInt(-120, 120),
					z: getRandomInt(-120, 120)
				}, // start
				{
					arc: [{
							x: getRandomInt(-120, 120),
							y: getRandomInt(-120, 120),
							z: getRandomInt(-120, 120)
						}, // corner
						{
							x: getRandomInt(-120, 120),
							y: getRandomInt(-120, 120),
							z: getRandomInt(-120, 120)
						}, // end point
					]
				}, {
					arc: [ // start next arc from last end point
						{
							x: getRandomInt(-120, 120),
							y: getRandomInt(-120, 120),
							z: getRandomInt(-120, 120)
						}, // corner
						{
							x: getRandomInt(-120, 120),
							y: getRandomInt(-120, 120),
							z: getRandomInt(-120, 120)
						}, // end point
					]
				},
			],
			closed: true_false[getRandomInt(0, 2)],
			stroke: getRandomInt(0, 4),
			color: colours[getRandomInt(0, 3)],
		});
	}
	if (isSpinning) {
		illo.rotate.y += 0.01;
	}
	illo.updateRenderGraph();
	// animate next frame   
	requestAnimationFrame(animate);
}
// start animation
animate();