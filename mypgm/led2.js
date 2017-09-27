const gpio = require('wiring-pi');
const LEDPIN2 = 29;
const LEDPIN1 = 28;
var count = 0;

const TimeOutHandler = function(){
	if(count % 2 == 1){
		gpio.digitalWrite(LEDPIN1, 0);
		if(count % 3 == 0){
			gpio.digitalWrite(LEDPIN2, 1);
		}
		console.log(count);
		count++;
	}
	else{
		gpio.digitalWrite(LEDPIN1, 1);
		if(count % 3 == 0){
			gpio.digitalWrite(LEDPIN2, 0);
		}
		console.log(count);
		count++;
	}
	setTimeout(TimeOutHandler, 1000);
}
gpio.wiringPiSetup();
gpio.pinMode(LEDPIN1, gpio.OUTPUT);
gpio.pinMode(LEDPIN2, gpio.OUTPUT);
setTimeout(TimeOutHandler, 1000);

