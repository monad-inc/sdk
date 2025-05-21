# ActivityLogsSettingsConfig

Fleet DM settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fleet_url** | **str** | URL of the Fleet DM instance | [optional] 

## Example

```python
from monad.models.activity_logs_settings_config import ActivityLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityLogsSettingsConfig from a JSON string
activity_logs_settings_config_instance = ActivityLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(ActivityLogsSettingsConfig.to_json())

# convert the object into a dict
activity_logs_settings_config_dict = activity_logs_settings_config_instance.to_dict()
# create an instance of ActivityLogsSettingsConfig from a dict
activity_logs_settings_config_from_dict = ActivityLogsSettingsConfig.from_dict(activity_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


