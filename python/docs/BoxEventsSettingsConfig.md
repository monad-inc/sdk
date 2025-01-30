# BoxEventsSettingsConfig

Box Events secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_type** | **List[str]** | A list of event types to filter by. | [optional] 

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


