# AuthLogsSecretsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integration_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**secret_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.auth_logs_secrets_config import AuthLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AuthLogsSecretsConfig from a JSON string
auth_logs_secrets_config_instance = AuthLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(AuthLogsSecretsConfig.to_json())

# convert the object into a dict
auth_logs_secrets_config_dict = auth_logs_secrets_config_instance.to_dict()
# create an instance of AuthLogsSecretsConfig from a dict
auth_logs_secrets_config_from_dict = AuthLogsSecretsConfig.from_dict(auth_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


