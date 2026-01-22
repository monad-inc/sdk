# TinesEventsLogsSettingsConfig

Tines Events Logs settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** | Date to start fetching data from. If not specified, a full sync of is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**story_id** | **str** | Filter by the given story. | [optional] 
**team_id** | **str** | Filter by the given team. | [optional] 
**tenant_url** | **str** | Unique URL for your Tines instance | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.tines_events_logs_settings_config import TinesEventsLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TinesEventsLogsSettingsConfig from a JSON string
tines_events_logs_settings_config_instance = TinesEventsLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(TinesEventsLogsSettingsConfig.to_json())

# convert the object into a dict
tines_events_logs_settings_config_dict = tines_events_logs_settings_config_instance.to_dict()
# create an instance of TinesEventsLogsSettingsConfig from a dict
tines_events_logs_settings_config_from_dict = TinesEventsLogsSettingsConfig.from_dict(tines_events_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


