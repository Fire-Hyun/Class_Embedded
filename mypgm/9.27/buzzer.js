const gpio = require('wiring-pi');
const BUZZER = 29;

const TurnOn = function(){
	gpio.digitalWrite(BUZZER,1);
	console.log("Nodejs : BUZZER on");
	setTimeout(TurnOff, 200);
}
const TurnOff = function(){
	gpio.digitalWrite(BUZZER, 0);
	console.log("Nodejs:BUZZER off");
	setTimeout(TurnOn, 1000);
}

gpio.wiringPiSetup();
gpio.pinMode(BUZZER, gpio.OUTPUT);
setTimeout(TurnOn, 200);

