const gpio = require('wiring-pi');
const LEDR = 2;
const LEDB = 0;
const LEDG = 3;
const BUTTON = 25;
const BUZZER = 29;

var count = 0;

const CheckButton = function(){
	let data = gpio.digitalRead(BUTTON);
	if(!data){
		console.log("Nodejs:Button %d", count++);
		if(count %3 == 0){
			gpio.digitalWrite(LEDR, 1);
			console.log("RED");
		}
		else if(count %3 == 1){
			gpio.digitalWrite(LEDB, 1);
			console.log("BLUE");
		}
		else{
			gpio.digitalWrite(LEDG, 1);
			console.log("GREEN");
		}
		gpio.digitalWrite(BUZZER, 1)
		console.log("부저 ON");
		setTimeout(BuzzerOff, 200);
	}
	setTimeout(CheckButton, 200);
}

const BuzzerOff = function(){
	gpio.digitalWrite(BUZZER, 0);
	console.log("부저 OFF");
	gpio.digitalWrite(LEDR, 0);
	gpio.digitalWrite(LEDB, 0);
	gpio.digitalWrite(LEDG, 0);
}

process.on('SIGINT', function(){
	console.log("EXIT");
	process.exit();
});

gpio.wiringPiSetup();
gpio.pinMode(BUTTON, gpio.INPUT);
gpio.pinMode(BUZZER, gpio.OUTPUT);
gpio.pinMode(LEDR, gpio.OUTPUT);
gpio.pinMode(LEDB, gpio.OUTPUT);
gpio.pinMode(LEDG, gpio.OUTPUT);
setImmediate(CheckButton);
