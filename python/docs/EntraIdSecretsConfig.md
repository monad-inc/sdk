# EntraIdSecretsConfig

Microsoft Entra ID secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.entra_id_secrets_config import EntraIdSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EntraIdSecretsConfig from a JSON string
entra_id_secrets_config_instance = EntraIdSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(EntraIdSecretsConfig.to_json())

# convert the object into a dict
entra_id_secrets_config_dict = entra_id_secrets_config_instance.to_dict()
# create an instance of EntraIdSecretsConfig from a dict
entra_id_secrets_config_from_dict = EntraIdSecretsConfig.from_dict(entra_id_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


