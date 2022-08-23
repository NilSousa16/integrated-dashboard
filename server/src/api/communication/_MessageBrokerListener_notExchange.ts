import client, {Connection, Channel, ConsumeMessage} from 'amqplib';
import { Server, Socket } from 'socket.io';

import MessageProcessor from './MessageProcessor';

import config from '../../../config/default.json'

const amqpUrl = "amqp://" + config.broker_user + ":" + config.broker_password + "@" + config.broker_address;

/**
 * https://github.com/psyycker-medium/rabbitmq-nodejs-typescript/blob/main/src/index.ts
 */
class _MessageBrokerListener_notExchange {
  static async listenToSensorMessages(sensorTopic: string, socket: Socket) {
    const connection: Connection = await client.connect(amqpUrl);
    
    console.log('>>>>>>>>>>>>>>Ouvindo mensagens ...');

    const consumer = (channel: Channel) => (msg: ConsumeMessage | null): void => {
      if (msg) {
        // Display the received message
        console.log(msg.content.toString());
        
        // var msgJSON = JSON.parse(msg.content.toString());
        // Adicionando comunicação com socket io....
        // MessageProcessor.sendMessage(sensorTopic, config, socket, msgJSON);
        MessageProcessor.sendMessage(sensorTopic, config, socket, msg.content.toString());

        // Acknowledge the message
        channel.ack(msg);
      }
    }
     
    // Create a channel
    const channel: Channel = await connection.createChannel();
    
    // Makes the queue available to the client
    await channel.assertQueue(sensorTopic);
   
    // Start the consumer
    await channel.consume(sensorTopic, consumer(channel));
  }
}

export default _MessageBrokerListener_notExchange;