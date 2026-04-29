

# KafkaSettingsConfig

Kafka Output Settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**acks** | **KafkaAcks** |  |  [optional] |
|**batchConfig** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  |  [optional] |
|**bootstrapServers** | **String** | Comma-separated list of Kafka broker addresses (host:port) |  [optional] |
|**compressionType** | **KafkaCompressionType** |  |  [optional] |
|**headers** | [**List&lt;KafkaKafkaHeader&gt;**](KafkaKafkaHeader.md) | Static headers to add to each Kafka message |  [optional] |
|**messageKeyField** | **String** | JSON field path to extract as the Kafka message key (uses gjson syntax) |  [optional] |
|**retries** | **Integer** | Number of retry attempts for failed writes |  [optional] |
|**saslMechanism** | **KafkaSaslMechanism** |  |  [optional] |
|**securityProtocol** | **KafkaSecurityProtocol** |  |  [optional] |
|**topic** | **String** | The Kafka topic to publish messages to |  [optional] |
|**username** | **String** | Username for SASL authentication |  [optional] |



