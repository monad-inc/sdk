# AzureActivityLogsSettingsConfig

Microsoft Azure Activity Logs settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**correlation_id** | **str** | The correlation ID of the log | [optional] 
**resource_group_name** | **str** | The name of the resource group | [optional] 
**resource_provider** | **str** | The provider of the resource | [optional] 
**resource_uri** | **str** | The URI of the resource | [optional] 
**subscription_id** | **str** | The subscription ID of the Azure subscription | [optional] 
**tenant_id** | **str** | The tenant ID of the Azure AD application | [optional] 

## Example

```python
from monad.models.azure_activity_logs_settings_config import AzureActivityLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AzureActivityLogsSettingsConfig from a JSON string
azure_activity_logs_settings_config_instance = AzureActivityLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(AzureActivityLogsSettingsConfig.to_json())

# convert the object into a dict
azure_activity_logs_settings_config_dict = azure_activity_logs_settings_config_instance.to_dict()
# create an instance of AzureActivityLogsSettingsConfig from a dict
azure_activity_logs_settings_config_from_dict = AzureActivityLogsSettingsConfig.from_dict(azure_activity_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


