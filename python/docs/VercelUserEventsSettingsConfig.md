# VercelUserEventsSettingsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** | Date to start fetching data from. If not specified, a full sync of is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic data for testing, instead of connecting to a real data source. Defaults to an hourly cron schedule for cron-based inputs. | [optional] 
**with_payload** | **bool** | Whether to include detailed payload information in the events. | [optional] 

## Example

```python
from monad.models.vercel_user_events_settings_config import VercelUserEventsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VercelUserEventsSettingsConfig from a JSON string
vercel_user_events_settings_config_instance = VercelUserEventsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(VercelUserEventsSettingsConfig.to_json())

# convert the object into a dict
vercel_user_events_settings_config_dict = vercel_user_events_settings_config_instance.to_dict()
# create an instance of VercelUserEventsSettingsConfig from a dict
vercel_user_events_settings_config_from_dict = VercelUserEventsSettingsConfig.from_dict(vercel_user_events_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


