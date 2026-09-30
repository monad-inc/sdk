# Sentinelv2SecretsConfig

Sentinel Output Secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**tenant_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.sentinelv2_secrets_config import Sentinelv2SecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of Sentinelv2SecretsConfig from a JSON string
sentinelv2_secrets_config_instance = Sentinelv2SecretsConfig.from_json(json)
# print the JSON string representation of the object
print(Sentinelv2SecretsConfig.to_json())

# convert the object into a dict
sentinelv2_secrets_config_dict = sentinelv2_secrets_config_instance.to_dict()
# create an instance of Sentinelv2SecretsConfig from a dict
sentinelv2_secrets_config_from_dict = Sentinelv2SecretsConfig.from_dict(sentinelv2_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


