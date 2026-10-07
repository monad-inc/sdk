# TwilioEventsSettingsConfig

Twilio Events settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actor_sid** | **str** | Only includes events initiated by this Actor. Useful for auditing actions taken by specific users or API credentials. | [optional] 
**event_type** | **str** | Only includes events of a specific event type: https://www.twilio.com/docs/usage/monitor-events#event-types | [optional] 
**replication_start_time** | **str** | Only include events after this time for the initial sync. If not specified, returns all events from the start. Must be a valid ISO 8601 formatted datetime string: yyyy-MM-dd&#39;T&#39;HH:mm:ss&#39;Z&#39; | [optional] 
**resource_sid** | **str** | Only include events that refer to this resource. Useful for discovering the history of a specific resource. | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.twilio_events_settings_config import TwilioEventsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TwilioEventsSettingsConfig from a JSON string
twilio_events_settings_config_instance = TwilioEventsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(TwilioEventsSettingsConfig.to_json())

# convert the object into a dict
twilio_events_settings_config_dict = twilio_events_settings_config_instance.to_dict()
# create an instance of TwilioEventsSettingsConfig from a dict
twilio_events_settings_config_from_dict = TwilioEventsSettingsConfig.from_dict(twilio_events_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


