# KafkaSecretsConfig

Kafka Output Secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ca_certificate** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**client_certificate** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**client_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**password** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.kafka_secrets_config import KafkaSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of KafkaSecretsConfig from a JSON string
kafka_secrets_config_instance = KafkaSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(KafkaSecretsConfig.to_json())

# convert the object into a dict
kafka_secrets_config_dict = kafka_secrets_config_instance.to_dict()
# create an instance of KafkaSecretsConfig from a dict
kafka_secrets_config_from_dict = KafkaSecretsConfig.from_dict(kafka_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


