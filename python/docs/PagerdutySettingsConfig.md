# PagerdutySettingsConfig

PagerDuty Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alerts_config** | [**PagerdutyAlertsConfig**](PagerdutyAlertsConfig.md) |  | [optional] 
**default_event_type** | **str** | EventType determines whether events are sent as &#39;change&#39; or &#39;alert&#39; events. We recommend reading the docs for this output before making this choice. | [optional] 
**summary_config** | [**PagerdutySummaryConfig**](PagerdutySummaryConfig.md) |  | [optional] 

## Example

```python
from monad.models.pagerduty_settings_config import PagerdutySettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PagerdutySettingsConfig from a JSON string
pagerduty_settings_config_instance = PagerdutySettingsConfig.from_json(json)
# print the JSON string representation of the object
print(PagerdutySettingsConfig.to_json())

# convert the object into a dict
pagerduty_settings_config_dict = pagerduty_settings_config_instance.to_dict()
# create an instance of PagerdutySettingsConfig from a dict
pagerduty_settings_config_from_dict = PagerdutySettingsConfig.from_dict(pagerduty_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


