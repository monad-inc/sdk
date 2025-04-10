# LoginActivitySecretsConfig

Google Workspace Login Activity secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials_json** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**oauth_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.login_activity_secrets_config import LoginActivitySecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of LoginActivitySecretsConfig from a JSON string
login_activity_secrets_config_instance = LoginActivitySecretsConfig.from_json(json)
# print the JSON string representation of the object
print(LoginActivitySecretsConfig.to_json())

# convert the object into a dict
login_activity_secrets_config_dict = login_activity_secrets_config_instance.to_dict()
# create an instance of LoginActivitySecretsConfig from a dict
login_activity_secrets_config_from_dict = LoginActivitySecretsConfig.from_dict(login_activity_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


