# UniversalSecretsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**password** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**username** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.universal_secrets_config import UniversalSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of UniversalSecretsConfig from a JSON string
universal_secrets_config_instance = UniversalSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(UniversalSecretsConfig.to_json())

# convert the object into a dict
universal_secrets_config_dict = universal_secrets_config_instance.to_dict()
# create an instance of UniversalSecretsConfig from a dict
universal_secrets_config_from_dict = UniversalSecretsConfig.from_dict(universal_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


