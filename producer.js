const kafka = require('kafka-node');
const Producer = kafka.Producer;
const client = new kafka.KafkaClient({kafkaHost: 'localhost:9092'});
const producer = new Producer(client);
const admin = new kafka.Admin(client); // client must be KafkaClient

admin.listGroups((err, res) => {
  if(err) console.log("err listGroups", err)
  console.log('consumerGroups', res);
});

admin.listTopics((err, res) => {
  if(err) console.log("err listTopics", err)
  console.log('topics', res);
});

let payloads = [
  {
    topic: 'messageTopic1',
    messages: ['message 1 from partition 0', 'message 2 from partition 0'], // multi messages should be a array, single message can be just a string or a KeyedMessage instance
    key: 'theKey', // string or buffer, only needed when using keyed partitioner
    partition: 1, // default 0
    timestamp: Date.now() // <-- defaults to Date.now() (only available with kafka v0.10+)
  },
  {
    topic: 'messageTopic2',
    messages: ['message 3 from partition 1', 'message 4 from partition 1'], // multi messages should be a array, single message can be just a string or a KeyedMessage instance
    key: 'theKey', // string or buffer, only needed when using keyed partitioner
    partition: 1, // default 0
    timestamp: Date.now() // <-- defaults to Date.now() (only available with kafka v0.10+)
  }
]

// client.on('ready', function () {
//   client.refreshMetadata(['messageGroup2'], (err) => {
//     if (err) {
//       console.warn('Error refreshing kafka metadata', err);
//     }
//   });
// });

producer.on('ready', function () {
  // client.refreshMetadata();
  producer.send(payloads, function (err, data) {
    if(err) console.log("err send", err)
    console.log(data);
  });
});

producer.on('error', function (err) {
  if(err) console.log("err producer error", err)
})
