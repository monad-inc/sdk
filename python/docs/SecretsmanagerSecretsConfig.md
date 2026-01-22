# SecretsmanagerSecretsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**secret_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.secretsmanager_secrets_config import SecretsmanagerSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SecretsmanagerSecretsConfig from a JSON string
secretsmanager_secrets_config_instance = SecretsmanagerSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(SecretsmanagerSecretsConfig.to_json())

# convert the object into a dict
secretsmanager_secrets_config_dict = secretsmanager_secrets_config_instance.to_dict()
# create an instance of SecretsmanagerSecretsConfig from a dict
secretsmanager_secrets_config_from_dict = SecretsmanagerSecretsConfig.from_dict(secretsmanager_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


