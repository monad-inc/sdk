# MerakiConfigLogsSettingsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** | Date to start fetching data from. If not specified, a full sync of data from google workspace is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**org_id** | **str** | URL of the organization | [optional] 
**region** | **str** | api.meraki.com/api/v1 for most parts of the world. Different countries may have different base URIs | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.meraki_config_logs_settings_config import MerakiConfigLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of MerakiConfigLogsSettingsConfig from a JSON string
meraki_config_logs_settings_config_instance = MerakiConfigLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(MerakiConfigLogsSettingsConfig.to_json())

# convert the object into a dict
meraki_config_logs_settings_config_dict = meraki_config_logs_settings_config_instance.to_dict()
# create an instance of MerakiConfigLogsSettingsConfig from a dict
meraki_config_logs_settings_config_from_dict = MerakiConfigLogsSettingsConfig.from_dict(meraki_config_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


