import { Socket } from "socket.io";

class MessageProcessor {
	/**
	 * It configures the message to send through the web socket
	 * @param {*} sensorTopic [topic which identifies the source of the message]
	 * @param {*} topicValues [object that registers all possible topics used by the web socket communication]
	 * @param {*} socket [web socket object]
	 * @param {*} data [received JSON message]
	 */

	static sendMessage(sensorTopic:string, topicValues:any, socket: Socket, data:any) {
		// Tecnocentro
		if(sensorTopic == topicValues.firedetection_virtual_topic_tecnocentro) { // virtual fire detection sensor message
			socket.emit('temperature-virtual_tecnocentro', data.temperature);
			socket.emit('humidity-virtual_tecnocentro', data.humidity);
			socket.emit('flameDetected-virtual_tecnocentro', data.flameDetected);
		} else if (sensorTopic == topicValues.firedetection_real_topic_tecnocentro) { // real fire detection sensor message
			socket.emit('temperature-real_tecnocentro', data.temperature);
			socket.emit('humidity-real_tecnocentro', data.humidity);
			socket.emit('flameDetected-real_tecnocentro', data.flameDetected);
		} else if (sensorTopic == topicValues.smartmeter_raw_topic_tecnocentro) { // virtual smart meter message
			socket.emit('smartmeter-data_tecnocentro', data);
		} 

		// Bonfim
		if(sensorTopic == topicValues.firedetection_virtual_topic_bonfim) { // virtual fire detection sensor message
			socket.emit('temperature-virtual_bonfim', data.temperature);
			socket.emit('humidity-virtual_bonfim', data.humidity);
			socket.emit('flameDetected-virtual_bonfim', data.flameDetected);
		} else if (sensorTopic == topicValues.firedetection_real_topic_bonfim) { // real fire detection sensor message
			socket.emit('temperature-real_bonfim', data.temperature);
			socket.emit('humidity-real_bonfim', data.humidity);
			socket.emit('flameDetected-real_bonfim', data.flameDetected);
		} else if (sensorTopic == topicValues.smartmeter_raw_topic_bonfim) { // virtual smart meter message
			socket.emit('smartmeter-data_bonfim', data);
		}

		// Secti
		if(sensorTopic == topicValues.firedetection_virtual_topic_secti) { // virtual fire detection sensor message
			socket.emit('temperature-virtual_secti', data.temperature);
			socket.emit('humidity-virtual_secti', data.humidity);
			socket.emit('flameDetected-virtual_secti', data.flameDetected);
		} else if (sensorTopic == topicValues.firedetection_real_topic_secti) { // real fire detection sensor message
			socket.emit('temperature-real_secti', data.temperature);
			socket.emit('humidity-real_secti', data.humidity);
			socket.emit('flameDetected-real_secti', data.flameDetected);
		} else if (sensorTopic == topicValues.smartmeter_raw_topic_secti) { // virtual smart meter message
			socket.emit('smartmeter-data_secti', data);
		}

		// Cajazeiras
		if(sensorTopic == topicValues.firedetection_virtual_topic_cajazeiras) { // virtual fire detection sensor message
			socket.emit('temperature-virtual_cajazeiras', data.temperature);
			socket.emit('humidity-virtual_cajazeiras', data.humidity);
			socket.emit('flameDetected-virtual_cajazeiras', data.flameDetected);
		} else if (sensorTopic == topicValues.firedetection_real_topic_cajazeiras) { // real fire detection sensor message
			socket.emit('temperature-real_cajazeiras', data.temperature);
			socket.emit('humidity-real_cajazeiras', data.humidity);
			socket.emit('flameDetected-real_cajazeiras', data.flameDetected);
		} else if (sensorTopic == topicValues.smartmeter_raw_topic_cajazeiras) { // virtual smart meter message
			socket.emit('smartmeter-data_cajazeiras', data);
		}

		if(sensorTopic == topicValues.environment_change_windspeed) { 
			socket.emit('environment_change_windspeed', data);
		}

		if(sensorTopic == topicValues.environment_change_weather) { 
			socket.emit('environment_change_weather', data);
		}

		if(sensorTopic == topicValues.environment_change_explosion) { 
			socket.emit('environment_change_explosion', data);
		}

		if(sensorTopic == topicValues.environment_change_lighting) { 
			socket.emit('environment_change_lighting', data);
		}

	}
}

export default MessageProcessor;