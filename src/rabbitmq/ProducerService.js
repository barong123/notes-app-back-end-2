const amqp = require('amqplib');

const ProducerService = {
  async sendMessage(queue, message) {
    const connection = await amqp.connect(process.env.RABBITMQ_SERVER);
  },
};
