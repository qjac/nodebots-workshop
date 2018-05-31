'use strict';

const tessel = require('tessel');

// turn built-in led #2 on
tessel.led[2].on();

// turn built-in led #3 off (should be default)
tessel.led[3].off();

// alternate blinking of bothe led #2 and #3
setInterval(() => {
	tessel.led[2].toggle();
	tessel.led[3].toggle();
}, 100);

// to run on tessel, run
//  t2 run 00-tessel-intro
// in terminal
console.log("I'm blinking! (Press CTRL + C to stop)");
