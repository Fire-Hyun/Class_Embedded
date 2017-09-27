const gpio = require('wiring-pi');
const BUTTON = 25;
const LEDPIN = 29;
var count = 0;

const CheckButton = function(){
	let data = gpio.digitalRead(BUTTON);
	if(!data){
		console.log("Nodejs : Button was pressed!");
		if(count == 0){
			gpio.digitalWrite(LEDPIN, 1);
			console.log("Node LED On");
			count = 1;
		}
		else {
			gpio.digitalWrite(LEDPIN, 0);
			console.log("Node LED Off");
			count = 0;
		}
	}
	setTimeout(CheckButton, 100);
}

process.on('SIGINT', function(){
	console.log("Program Exit...");
	process.exit();
});

gpio.wiringPiSetup();
gpio.pinMode(BUTTON, gpio.INPUT);
gpio.pinMode(LEDPIN, gpio.OUTPUT);

setImmediate(CheckButton);

