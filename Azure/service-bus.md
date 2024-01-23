# index

- [Azure Learn](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview)
- message broker with message queues and publish-subscribe topics
- Message means business data
- Topics and subscriptions => 1:n relationship between publisher (one) to subscribers, allowing subscribers to select particular messages from a published message stream.
- Platform as a service

## Queue

- Queue store messages until the receiving application is available to receive and process them.
- Queues are ordered
- Service Bus keeps messages in memory or volatile storage until they've been reported by the client as accepted.
- Messages are delivered in pull mode, only delivering messages when requested.
- The pull operation can be long-lived and only complete once a message is available.

## Topics

- While a queue is often used for point-to-point communication, topics are useful in publish/subscribe scenarios.
- Topics can have multiple, independent subscriptions, which attach to the topic and otherwise work exactly like queues from the receiver side.
