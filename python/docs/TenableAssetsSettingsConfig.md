# TenableAssetsSettingsConfig

Tenable assets settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | **str** | Cron expression to schedule the data collection. | [optional] 
**full_sync** | **bool** | Boolean to control weather the input performs full syncs or incremental syncs | [optional] 

## Example

```python
from monad.models.tenable_assets_settings_config import TenableAssetsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TenableAssetsSettingsConfig from a JSON string
tenable_assets_settings_config_instance = TenableAssetsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(TenableAssetsSettingsConfig.to_json())

# convert the object into a dict
tenable_assets_settings_config_dict = tenable_assets_settings_config_instance.to_dict()
# create an instance of TenableAssetsSettingsConfig from a dict
tenable_assets_settings_config_from_dict = TenableAssetsSettingsConfig.from_dict(tenable_assets_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


