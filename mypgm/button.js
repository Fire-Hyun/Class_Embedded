const gpio = require('wiring-pi');
const BUTTON = 25;

const CheckButton = function(){
	let data = gpio.digitalRead(BUTTON);
	if(!data)
		console.log("Nodejs : Button was pressed!");
	setTimeout(CheckButton, 300);
}

process.on('SIGINT', function(){
	console.log("Program Exit...");
	process.exit();
});

gpio.wiringPiSetup();
gpio.pinMode(BUTTON, gpio.INPUT);
setImmediate(CheckButton);

