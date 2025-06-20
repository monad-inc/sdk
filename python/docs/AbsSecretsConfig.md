# AbsSecretsConfig

Sentinel Output Secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**tenant_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.abs_secrets_config import AbsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AbsSecretsConfig from a JSON string
abs_secrets_config_instance = AbsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(AbsSecretsConfig.to_json())

# convert the object into a dict
abs_secrets_config_dict = abs_secrets_config_instance.to_dict()
# create an instance of AbsSecretsConfig from a dict
abs_secrets_config_from_dict = AbsSecretsConfig.from_dict(abs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


