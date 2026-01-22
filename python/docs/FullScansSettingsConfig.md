# FullScansSettingsConfig

Socket Full Scans settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** | Date to start fetching data from. If not specified, a full sync of is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**org_slug** | **str** | Cron expression for scheduling the input | [optional] 
**repo** | **str** | A repository slug to filter full-scans by. | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.full_scans_settings_config import FullScansSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of FullScansSettingsConfig from a JSON string
full_scans_settings_config_instance = FullScansSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(FullScansSettingsConfig.to_json())

# convert the object into a dict
full_scans_settings_config_dict = full_scans_settings_config_instance.to_dict()
# create an instance of FullScansSettingsConfig from a dict
full_scans_settings_config_from_dict = FullScansSettingsConfig.from_dict(full_scans_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


