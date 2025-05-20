# TenableAssetsCronSettingsConfig

Tenable assets settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | **str** | Cron expression to schedule the data collection. | [optional] 

## Example

```python
from monad.models.tenable_assets_cron_settings_config import TenableAssetsCronSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TenableAssetsCronSettingsConfig from a JSON string
tenable_assets_cron_settings_config_instance = TenableAssetsCronSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(TenableAssetsCronSettingsConfig.to_json())

# convert the object into a dict
tenable_assets_cron_settings_config_dict = tenable_assets_cron_settings_config_instance.to_dict()
# create an instance of TenableAssetsCronSettingsConfig from a dict
tenable_assets_cron_settings_config_from_dict = TenableAssetsCronSettingsConfig.from_dict(tenable_assets_cron_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


