# SentinelSecretsConfig

Sentinel Output Secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**tenant_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.sentinel_secrets_config import SentinelSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SentinelSecretsConfig from a JSON string
sentinel_secrets_config_instance = SentinelSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(SentinelSecretsConfig.to_json())

# convert the object into a dict
sentinel_secrets_config_dict = sentinel_secrets_config_instance.to_dict()
# create an instance of SentinelSecretsConfig from a dict
sentinel_secrets_config_from_dict = SentinelSecretsConfig.from_dict(sentinel_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


