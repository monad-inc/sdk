# EventsLogsSettingsConfig

Tines Events Logs settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**story_id** | **str** | Filter by the given story. | [optional] 
**team_id** | **str** | Filter by the given team. | [optional] 
**tenant_url** | **str** | Unique URL for your Tines instance | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.events_logs_settings_config import EventsLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EventsLogsSettingsConfig from a JSON string
events_logs_settings_config_instance = EventsLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(EventsLogsSettingsConfig.to_json())

# convert the object into a dict
events_logs_settings_config_dict = events_logs_settings_config_instance.to_dict()
# create an instance of EventsLogsSettingsConfig from a dict
events_logs_settings_config_from_dict = EventsLogsSettingsConfig.from_dict(events_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


