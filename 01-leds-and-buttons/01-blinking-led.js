// Our code here!
// written with the johnny 5 library

// set up board
// require the johnny five language (there are different ones)
const five = require('johnny-five');
// require the tessel
const Tessel = require('tessel-io');
// connect the language to the tessel
const board = new five.Board({
	io: new Tessel()
});

// whenthe board is ready, run the function
board.on('ready', () => {
	// tell it where the led is! port a0
	const led = new five.Led('a5');
	// .blink takes a milliseconds argument
	// led.blink(470);

	// can't use port a0 for pulse. must use a PWM pin (ports 5 and 6 on the board)
	// PWM = pulse width modulation
	led.pulse(500);
});
