# UsersInfoSecretsConfig

CrowdStrike EDR users info secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.users_info_secrets_config import UsersInfoSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of UsersInfoSecretsConfig from a JSON string
users_info_secrets_config_instance = UsersInfoSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(UsersInfoSecretsConfig.to_json())

# convert the object into a dict
users_info_secrets_config_dict = users_info_secrets_config_instance.to_dict()
# create an instance of UsersInfoSecretsConfig from a dict
users_info_secrets_config_from_dict = UsersInfoSecretsConfig.from_dict(users_info_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


