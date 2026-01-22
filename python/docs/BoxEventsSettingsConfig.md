# BoxEventsSettingsConfig

Box Events secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** | Date to start fetching data from. If not specified, data from 1 year ago upto now from box is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**event_type** | **List[str]** | A list of event types to filter by. | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.box_events_settings_config import BoxEventsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BoxEventsSettingsConfig from a JSON string
box_events_settings_config_instance = BoxEventsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(BoxEventsSettingsConfig.to_json())

# convert the object into a dict
box_events_settings_config_dict = box_events_settings_config_instance.to_dict()
# create an instance of BoxEventsSettingsConfig from a dict
box_events_settings_config_from_dict = BoxEventsSettingsConfig.from_dict(box_events_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


