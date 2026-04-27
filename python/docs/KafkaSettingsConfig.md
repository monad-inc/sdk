# KafkaSettingsConfig

Kafka Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acks** | **str** | Acknowledgment level (0&#x3D;none, 1&#x3D;leader only, all&#x3D;all replicas) | [optional] 
**batch_config** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | [optional] 
**bootstrap_servers** | **str** | Comma-separated list of Kafka broker addresses (host:port) | [optional] 
**compression_type** | **str** | Compression codec for messages (none, gzip, snappy, lz4, zstd) | [optional] 
**headers** | [**List[KafkaKafkaHeader]**](KafkaKafkaHeader.md) | Static headers to add to each Kafka message | [optional] 
**message_key_field** | **str** | JSON field path to extract as the Kafka message key (uses gjson syntax) | [optional] 
**retries** | **int** | Number of retry attempts for failed writes | [optional] 
**sasl_mechanism** | **str** | SASL authentication mechanism (PLAIN, SCRAM-SHA-256, SCRAM-SHA-512) | [optional] 
**security_protocol** | **str** | Security protocol for broker connections (NONE, SASL_PLAINTEXT, SASL_SSL, SSL) | [optional] 
**topic** | **str** | The Kafka topic to publish messages to | [optional] 
**username** | **str** | Username for SASL authentication | [optional] 

## Example

```python
from monad.models.kafka_settings_config import KafkaSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of KafkaSettingsConfig from a JSON string
kafka_settings_config_instance = KafkaSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(KafkaSettingsConfig.to_json())

# convert the object into a dict
kafka_settings_config_dict = kafka_settings_config_instance.to_dict()
# create an instance of KafkaSettingsConfig from a dict
kafka_settings_config_from_dict = KafkaSettingsConfig.from_dict(kafka_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


