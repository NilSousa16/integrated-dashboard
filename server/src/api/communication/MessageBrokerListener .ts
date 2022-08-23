import amqp from 'amqplib/callback_api';
import { Server, Socket } from 'socket.io';

import MessageProcessor from './MessageProcessor';

import config from '../../../config/default.json'

const amqpUrl = "amqp://" + config.broker_user + ":" + config.broker_password + "@" + config.broker_address;

/**
 * https://github.com/psyycker-medium/rabbitmq-nodejs-typescript/blob/main/src/index.ts
 */
class MessageBrokerListener {
  static async listenToSensorMessages(sensorTopic: string, socket: Socket) {
    /**
     * Creating a RabbitMQ connection.
     *
     * @{Tutorial: @link https://www.rabbitmq.com/tutorials/tutorial-five-javascript.html}
     * 
     * @param  {[type]} err            [description]
     * @param  {String} channel)       {                                    var exchange [description]
     * @param  {[type]} options.noAck: true          [description]
     * @return {[type]}                [description]
     */
    amqp.connect(amqpUrl, function(err, conn) {
      if (conn) {
        conn.createChannel(function(err, channel) {

          // it has to remain unchanged
          var exchange = 'amq.topic';

          channel.assertExchange(exchange, 'topic', {durable: true});

          channel.assertQueue('', {exclusive: true}, function(err, q) {
            console.log(' ');
            console.log(" [*] Listening to " + amqpUrl + " on the topic " + sensorTopic + ". Waiting for messages.");

            channel.bindQueue(q.queue, exchange, sensorTopic);

            // this is where you implement what to do with the received messages (ex.: a sensor information response message)
            channel.consume(q.queue, function(msg: any) {
              console.log(" [*] Message received from the [RoutingKey]: '" + msg.fields.routingKey + "' with the message: ");
              console.log("_______________");
              var msgJSON = JSON.parse(msg.content.toString());
              console.log(msgJSON);
              MessageProcessor.sendMessage(sensorTopic, config, socket, msgJSON);
              console.log("_______________");
            }, {noAck: true});

          });
        });

        conn.on('close', function connectionClose() {
          console.log('Connection closed');
        });
      } else {
          console.log("Connection not established.");
      }
    });
  }
}

export default MessageBrokerListener;