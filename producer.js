const kafka = require('kafka-node');
const Producer = kafka.Producer;
const client = new kafka.KafkaClient({kafkaHost: 'localhost:9092'});
const producer = new Producer(client);
const admin = new kafka.Admin(client); // client must be KafkaClient

admin.listGroups((err, res) => {
  console.log('consumerGroups', res);
});

admin.listTopics((err, res) => {
  console.log('topics', res);
});

let payloads = [
  {
    topic: 'consumerGroup1',
    messages: ['message 1', 'message 2'], // multi messages should be a array, single message can be just a string or a KeyedMessage instance
    key: 'theKey', // string or buffer, only needed when using keyed partitioner
    partition: 0, // default 0
    timestamp: Date.now() // <-- defaults to Date.now() (only available with kafka v0.10+)
  },
  {
    topic: 'consumerGroup2',
    messages: ['message 3', 'message 4'], // multi messages should be a array, single message can be just a string or a KeyedMessage instance
    key: 'theKey', // string or buffer, only needed when using keyed partitioner
    partition: 1, // default 0
    timestamp: Date.now() // <-- defaults to Date.now() (only available with kafka v0.10+)
  }
]

// client.on('ready', function () {
//   client.refreshMetadata()
// });

producer.on('ready', function () {
  // client.refreshMetadata()
  producer.send(payloads, function (err, data) {
    console.log(data);
  });
});

producer.on('error', function (err) {})
