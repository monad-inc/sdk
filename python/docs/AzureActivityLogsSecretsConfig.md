# AzureActivityLogsSecretsConfig

Microsoft Azure Activity Logs secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | The client ID of the Azure AD application | [optional] 
**client_secret** | **str** | The client secret of the Azure AD application | [optional] 

## Example

```python
from monad.models.azure_activity_logs_secrets_config import AzureActivityLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AzureActivityLogsSecretsConfig from a JSON string
azure_activity_logs_secrets_config_instance = AzureActivityLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(AzureActivityLogsSecretsConfig.to_json())

# convert the object into a dict
azure_activity_logs_secrets_config_dict = azure_activity_logs_secrets_config_instance.to_dict()
# create an instance of AzureActivityLogsSecretsConfig from a dict
azure_activity_logs_secrets_config_from_dict = AzureActivityLogsSecretsConfig.from_dict(azure_activity_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


