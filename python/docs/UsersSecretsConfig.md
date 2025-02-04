# UsersSecretsConfig

Google Workspace Users secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials_json** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**customer_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**domain** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.users_secrets_config import UsersSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of UsersSecretsConfig from a JSON string
users_secrets_config_instance = UsersSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(UsersSecretsConfig.to_json())

# convert the object into a dict
users_secrets_config_dict = users_secrets_config_instance.to_dict()
# create an instance of UsersSecretsConfig from a dict
users_secrets_config_from_dict = UsersSecretsConfig.from_dict(users_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


