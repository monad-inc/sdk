# Microsoft365GenericSecretsConfig

Microsoft 365 secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.microsoft365_generic_secrets_config import Microsoft365GenericSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of Microsoft365GenericSecretsConfig from a JSON string
microsoft365_generic_secrets_config_instance = Microsoft365GenericSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(Microsoft365GenericSecretsConfig.to_json())

# convert the object into a dict
microsoft365_generic_secrets_config_dict = microsoft365_generic_secrets_config_instance.to_dict()
# create an instance of Microsoft365GenericSecretsConfig from a dict
microsoft365_generic_secrets_config_from_dict = Microsoft365GenericSecretsConfig.from_dict(microsoft365_generic_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


