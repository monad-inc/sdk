# UsersSecretsConfig

Google Workspace Users secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials_json** | **str** | JSON credentials to authenticate with Google Cloud. | [optional] 
**customer_id** | **str** | Google Workspace Customer ID. If you use your google workspace customer ID you will pull data on all users in all domains of your Google Workspace account. This should be set if Domain is not set. | [optional] 
**domain** | **str** | Domain name your users belong to. If you use a google workspace domain you will only pull user data for users that belong to that domain. This should be set if CustomerID is not set | [optional] 

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


