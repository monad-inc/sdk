

# KafkaSettingsConfig

Kafka Output Settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**acks** | **String** | Acknowledgment level (0&#x3D;none, 1&#x3D;leader only, all&#x3D;all replicas) |  [optional] |
|**batchConfig** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  |  [optional] |
|**bootstrapServers** | **String** | Comma-separated list of Kafka broker addresses (host:port) |  [optional] |
|**compressionType** | **String** | Compression codec for messages (none, gzip, snappy, lz4, zstd) |  [optional] |
|**headers** | [**List&lt;KafkaKafkaHeader&gt;**](KafkaKafkaHeader.md) | Static headers to add to each Kafka message |  [optional] |
|**messageKeyField** | **String** | JSON field path to extract as the Kafka message key (uses gjson syntax) |  [optional] |
|**retries** | **Integer** | Number of retry attempts for failed writes |  [optional] |
|**saslMechanism** | **String** | SASL authentication mechanism (PLAIN, SCRAM-SHA-256, SCRAM-SHA-512) |  [optional] |
|**securityProtocol** | **String** | Security protocol for broker connections (NONE, SASL_PLAINTEXT, SASL_SSL, SSL) |  [optional] |
|**topic** | **String** | The Kafka topic to publish messages to |  [optional] |
|**username** | **String** | Username for SASL authentication |  [optional] |



