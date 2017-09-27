const gpio = require('wiring-pi');
const LIGHT = 28;
const LED = 27;

const CheckLight = function(){
	gpio.digitalWrite(LED, 0);
	var data = gpio.digitalRead(LIGHT);
	if(!data){
		console.log("Nodejs: Bright!!");
		gpio.digitalWrite(LED, 0);
	}
	else{
		console.log("Nodejs : Dark");
		gpio.digitalWrite(LED, 1);
	}
	setTimeout(CheckLight, 500);
}
process.on('SIGINT', function(){
	gpio.digitalWrite(LED, 0);
	console.log("Exit");
});

gpio.wiringPiSetup();
gpio.pinMode(LIGHT, gpio. INPUT);
gpio.pinMode(LED, gpio.OUTPUT);
setTimeout(CheckLight, 200);
