const kafka = require('kafka-node');
const Consumer = kafka.Consumer;
const client = new kafka.KafkaClient({kafkaHost: 'localhost:9092'});

let consumer = new Consumer(
    client,
    [
        {topic: 'consumerGroup1', partition: 0},    // broker can have multiple partition
        {topic: 'consumerGroup2', partition: 0}
    ],
    {
        autoCommit: false                     // message acknowledge
    }
);

consumer.on('message', function (message) {
    console.log(message);
});
