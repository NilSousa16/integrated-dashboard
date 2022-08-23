import { Server } from 'socket.io';

import MessageBrokerListener from "./communication/MessageBrokerListener ";

// https://mariusschulz.com/blog/importing-json-modules-in-typescript
import config from '../../config/default.json';

/**
 * Intermediate all client requests.
 */
class ApplicationManager {

  constructor() { }

  /**
   * This method prepares the server to receive web socket messages
   * @param {*} io [the web socket object]
   */
  startBrokerListeners(io: Server) {   
    io.on('connection', (socket) => {
      socket.on('start', (arg) => {
        console.log(arg);
        // It prepares the listening process to all raw data sensor topics
        // Tecnocentro
        MessageBrokerListener.listenToSensorMessages(config.firedetection_virtual_topic_tecnocentro, socket); 
        MessageBrokerListener.listenToSensorMessages(config.firedetection_real_topic_tecnocentro, socket);
        MessageBrokerListener.listenToSensorMessages(config.smartmeter_raw_topic_tecnocentro, socket);
        // Bonfim
        MessageBrokerListener.listenToSensorMessages(config.firedetection_virtual_topic_bonfim, socket); 
        MessageBrokerListener.listenToSensorMessages(config.firedetection_real_topic_bonfim, socket);
        MessageBrokerListener.listenToSensorMessages(config.smartmeter_raw_topic_bonfim, socket);
        // Secti
        MessageBrokerListener.listenToSensorMessages(config.firedetection_virtual_topic_secti, socket); 
        MessageBrokerListener.listenToSensorMessages(config.firedetection_real_topic_secti, socket);
        MessageBrokerListener.listenToSensorMessages(config.smartmeter_raw_topic_secti, socket);
        // Cajazeiras
        MessageBrokerListener.listenToSensorMessages(config.firedetection_virtual_topic_cajazeiras, socket); 
        MessageBrokerListener.listenToSensorMessages(config.firedetection_real_topic_cajazeiras, socket);
        MessageBrokerListener.listenToSensorMessages(config.smartmeter_raw_topic_cajazeiras, socket);
      });
    });
  }
}

export default ApplicationManager;
