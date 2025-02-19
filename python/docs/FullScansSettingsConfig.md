# FullScansSettingsConfig

Socket Full Scans settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**org_slug** | **str** | Cron expression for scheduling the input | [optional] 
**repo** | **str** | A repository slug to filter full-scans by. | [optional] 

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


