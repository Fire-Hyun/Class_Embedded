const gpio = require('wiring-pi');
const LEDPIN2 = 29;
const LEDPIN1 = 28;
var count = 0;

const TimeOutHandler = function(){
	if(count > 0){
		gpio.digitalWrite(LEDPIN2, 0);
		gpio.digitalWrite(LEDPIN1, 1);
		console.log("Node : LED2 off");
		console.log("Node : LED1 on");
		count = 0;
	}
	else{
		gpio.digitalWrite(LEDPIN1, 0);
		gpio.digitalWrite(LEDPIN2, 1);
		console.log("Node : LED1 off");
		console.log("Node : LED2 on");
		count = 1;
	}
	setTimeout(TimeOutHandler, 1000);
}
gpio.wiringPiSetup();
gpio.pinMode(LEDPIN1, gpio.OUTPUT);
gpio.pinMode(LEDPIN2, gpio.OUTPUT);
setTimeout(TimeOutHandler, 1000);

