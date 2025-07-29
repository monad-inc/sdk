# SystemlogSettingsConfig

Okta system log settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**org_url** | **str** | The URL of the Okta organization | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.systemlog_settings_config import SystemlogSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SystemlogSettingsConfig from a JSON string
systemlog_settings_config_instance = SystemlogSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(SystemlogSettingsConfig.to_json())

# convert the object into a dict
systemlog_settings_config_dict = systemlog_settings_config_instance.to_dict()
# create an instance of SystemlogSettingsConfig from a dict
systemlog_settings_config_from_dict = SystemlogSettingsConfig.from_dict(systemlog_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


