/*!
 * MindPlus
 * maqueen
 *
 */
#include <Maqueen_Motor.h>
#include "DFRobot_MaqueenV5.h"

// Dynamic variables
volatile float mind_n_Kp, mind_n_Kd, mind_n_baseSpeed, mind_n_error, mind_n_lastError,
               mind_n_leftSensor, mind_n_rightSensor, mind_n_correction, mind_n_leftSpeed,
               mind_n_rightSpeed;
// Create an object
DFRobot_MaqueenV5 maqueenV5;
Maqueen_Motor     motor;


// Main program start
void setup() {
	mind_n_Kp = 90;
	mind_n_Kd = 15;
	mind_n_baseSpeed = 80;
	mind_n_error = 0;
	mind_n_lastError = 0;
	maqueenV5.rgbSet(eRgbLeft, eRgbOff);
	digitalWrite(8,LOW);
	while (!(Button_B.isPressed() && !Button_A.isPressed())) {
		yield();
	}
	maqueenV5.rgbSet(eRgbLeft, eRgbRed);
	digitalWrite(8,HIGH);
	delay(3000);
	maqueenV5.rgbSet(eRgbLeft, eRgbOff);
	digitalWrite(8,LOW);
}
void loop() {
	mind_n_leftSensor = digitalRead(13);
	mind_n_rightSensor = digitalRead(14);
	mind_n_error = (mind_n_rightSensor - mind_n_leftSensor);
	mind_n_correction = ((mind_n_Kp * mind_n_error) + (mind_n_Kd * (mind_n_error - mind_n_lastError)));
	mind_n_lastError = mind_n_error;
	mind_n_leftSpeed = (mind_n_baseSpeed + mind_n_correction);
	mind_n_rightSpeed = (mind_n_baseSpeed - mind_n_correction);
	if ((mind_n_leftSpeed>255)) {
		mind_n_leftSpeed = 255;
	}
	if ((mind_n_leftSpeed<0)) {
		mind_n_leftSpeed = 0;
	}
	if ((mind_n_rightSpeed>255)) {
		mind_n_rightSpeed = 255;
	}
	if ((mind_n_rightSpeed<0)) {
		mind_n_rightSpeed = 0;
	}
	motor.motorRun(motor.LEFT,motor.CW,mind_n_leftSpeed);
	motor.motorRun(motor.RIGHT,motor.CW,mind_n_rightSpeed);
	delay(10);
}
