# BugsnagOrgEventsSettingsConfig

Bugsnag Org Events settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** | Date to start fetching data from. | [optional] 
**organization_id** | **str** | Organization ID | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.bugsnag_org_events_settings_config import BugsnagOrgEventsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BugsnagOrgEventsSettingsConfig from a JSON string
bugsnag_org_events_settings_config_instance = BugsnagOrgEventsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(BugsnagOrgEventsSettingsConfig.to_json())

# convert the object into a dict
bugsnag_org_events_settings_config_dict = bugsnag_org_events_settings_config_instance.to_dict()
# create an instance of BugsnagOrgEventsSettingsConfig from a dict
bugsnag_org_events_settings_config_from_dict = BugsnagOrgEventsSettingsConfig.from_dict(bugsnag_org_events_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


