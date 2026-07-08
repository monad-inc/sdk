# AzureEventHubsSettingsConfig

Microsoft Event Hubs settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_group** | **str** | The consumer group name for reading events (default: &#x60;$Default&#x60;) | [optional] 
**event_hub_name** | **str** | The name of the specific Event Hub to consume from | [optional] 
**event_hub_namespace** | **str** | The fully qualified namespace URL (e.g., &#x60;your-namespace.servicebus.windows.net&#x60;) | [optional] 
**lookback_duration** | **int** | The duration to look back for events in minutes (default: 60 minutes) | [optional] 
**subscription_id** | **str** | The Azure subscription ID containing your Event Hubs namespace | [optional] 
**tenant_id** | **str** | The Azure Entra ID tenant (directory) ID | [optional] 

## Example

```python
from monad.models.azure_event_hubs_settings_config import AzureEventHubsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AzureEventHubsSettingsConfig from a JSON string
azure_event_hubs_settings_config_instance = AzureEventHubsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(AzureEventHubsSettingsConfig.to_json())

# convert the object into a dict
azure_event_hubs_settings_config_dict = azure_event_hubs_settings_config_instance.to_dict()
# create an instance of AzureEventHubsSettingsConfig from a dict
azure_event_hubs_settings_config_from_dict = AzureEventHubsSettingsConfig.from_dict(azure_event_hubs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


