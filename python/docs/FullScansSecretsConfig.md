# FullScansSecretsConfig

Socket Full Scans secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.full_scans_secrets_config import FullScansSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of FullScansSecretsConfig from a JSON string
full_scans_secrets_config_instance = FullScansSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(FullScansSecretsConfig.to_json())

# convert the object into a dict
full_scans_secrets_config_dict = full_scans_secrets_config_instance.to_dict()
# create an instance of FullScansSecretsConfig from a dict
full_scans_secrets_config_from_dict = FullScansSecretsConfig.from_dict(full_scans_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


