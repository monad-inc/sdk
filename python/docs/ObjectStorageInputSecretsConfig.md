# ObjectStorageInputSecretsConfig

Object storage secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**secret_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.object_storage_input_secrets_config import ObjectStorageInputSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ObjectStorageInputSecretsConfig from a JSON string
object_storage_input_secrets_config_instance = ObjectStorageInputSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(ObjectStorageInputSecretsConfig.to_json())

# convert the object into a dict
object_storage_input_secrets_config_dict = object_storage_input_secrets_config_instance.to_dict()
# create an instance of ObjectStorageInputSecretsConfig from a dict
object_storage_input_secrets_config_from_dict = ObjectStorageInputSecretsConfig.from_dict(object_storage_input_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


