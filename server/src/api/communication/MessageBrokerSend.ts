import client, {Connection, Channel, ConsumeMessage} from 'amqplib';

/**
 * https://github.com/psyycker-medium/rabbitmq-nodejs-typescript/blob/main/src/index.ts
 */

class MessageBrokerSend {
  // public async execute(user: string, password:string, port:string) {
    public async execute() {
    // const connection: Connection = await client.connect('amqp://guest:guest@localhost:5672')

    // const channel: Channel = await connection.createChannel();
    // // Makes the queue available to the client
    // await channel.assertQueue('livinglab.sensor.firedetector.raw.virtual.raspberrypiTestesVirtual');

    // // Function to send some messages before consuming the queue
    // const sendMessages = (channel: Channel) => {
    //   channel.sendToQueue('livinglab.sensor.firedetector.raw.virtual.raspberrypiTestesVirtual', Buffer.from(`message 1010`));
    //   console.log(`{
    //     "mac": "2002",
    //     "ip": "192.168.0.222"}`);
    // }

    // sendMessages(channel);
  }
}

export default MessageBrokerSend;