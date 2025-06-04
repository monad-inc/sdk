# ObjectStorageSecretsConfig

Object Storage Output Secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**secret_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.object_storage_secrets_config import ObjectStorageSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ObjectStorageSecretsConfig from a JSON string
object_storage_secrets_config_instance = ObjectStorageSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(ObjectStorageSecretsConfig.to_json())

# convert the object into a dict
object_storage_secrets_config_dict = object_storage_secrets_config_instance.to_dict()
# create an instance of ObjectStorageSecretsConfig from a dict
object_storage_secrets_config_from_dict = ObjectStorageSecretsConfig.from_dict(object_storage_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


