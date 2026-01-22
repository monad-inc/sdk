# ActivitylogsSettingsConfig

Duo Security Activity Logs settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | The API hostname for your Duo Security integration. | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.activitylogs_settings_config import ActivitylogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ActivitylogsSettingsConfig from a JSON string
activitylogs_settings_config_instance = ActivitylogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(ActivitylogsSettingsConfig.to_json())

# convert the object into a dict
activitylogs_settings_config_dict = activitylogs_settings_config_instance.to_dict()
# create an instance of ActivitylogsSettingsConfig from a dict
activitylogs_settings_config_from_dict = ActivitylogsSettingsConfig.from_dict(activitylogs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


