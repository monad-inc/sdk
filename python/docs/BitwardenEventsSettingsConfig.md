# BitwardenEventsSettingsConfig

Bitwarden Events settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** | Date to start fetching data from. If not specified, will fetch from the most recent data available. | [optional] 
**base_url** | **str** | Base URL for self-hosted Bitwarden instance (required if region is SelfHosted) | [optional] 
**region** | **str** | Region of the Bitwarden instance: US, EU, or SelfHosted (default: US) | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.bitwarden_events_settings_config import BitwardenEventsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BitwardenEventsSettingsConfig from a JSON string
bitwarden_events_settings_config_instance = BitwardenEventsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(BitwardenEventsSettingsConfig.to_json())

# convert the object into a dict
bitwarden_events_settings_config_dict = bitwarden_events_settings_config_instance.to_dict()
# create an instance of BitwardenEventsSettingsConfig from a dict
bitwarden_events_settings_config_from_dict = BitwardenEventsSettingsConfig.from_dict(bitwarden_events_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


