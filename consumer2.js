const kafka = require('kafka-node');
const Consumer = kafka.Consumer;
const client = new kafka.KafkaClient({kafkaHost: 'localhost:9092'});

let consumer = new Consumer(
    client,
    [
        {topic: 'messageTopic1', partition: 1},    // broker can have multiple partition
        {topic: 'messageTopic2', partition: 1}
    ],
    {
        autoCommit: true                     // message acknowledge
    }
);

consumer.on('message', function (message) {
    console.log(message);
});
