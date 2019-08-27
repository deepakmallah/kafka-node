# kafka-node-example
https://kafka.apache.org/documentation/
https://www.oreilly.com/library/view/kafka-the-definitive/9781491936153/ch04.html
https://sookocheff.com/post/kafka/kafka-in-a-nutshell/

installation in mac using brew
https://medium.com/@Ankitthakur/apache-kafka-installation-on-mac-using-homebrew-a367cdefd273

console consumer 
https://gist.github.com/mackwic/e68ccf10d9a27d1e1d7196bac5790831

create topic
`kafka-topics --create --zookeeper localhost:2181 --replication-factor 1 --partitions 2 --topic consumerGroup1`

list topics
`kafka-topics --list --zookeeper localhost:2181`

delete topics
`kafka-topics --delete --zookeeper localhost:2181`

kafka-console-producer --broker-list localhost:9092 --topic test
kafka-console-consumer --bootstrap-server localhost:9092 --topic topic1 --from-beginning

NOTE : Do not send message before creating topic