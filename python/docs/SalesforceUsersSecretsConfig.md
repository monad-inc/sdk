# SalesforceUsersSecretsConfig

Salesforce Users secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.salesforce_users_secrets_config import SalesforceUsersSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SalesforceUsersSecretsConfig from a JSON string
salesforce_users_secrets_config_instance = SalesforceUsersSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(SalesforceUsersSecretsConfig.to_json())

# convert the object into a dict
salesforce_users_secrets_config_dict = salesforce_users_secrets_config_instance.to_dict()
# create an instance of SalesforceUsersSecretsConfig from a dict
salesforce_users_secrets_config_from_dict = SalesforceUsersSecretsConfig.from_dict(salesforce_users_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


