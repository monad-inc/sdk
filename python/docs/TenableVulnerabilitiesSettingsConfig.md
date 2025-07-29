# TenableVulnerabilitiesSettingsConfig

Tenable assets settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.tenable_vulnerabilities_settings_config import TenableVulnerabilitiesSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TenableVulnerabilitiesSettingsConfig from a JSON string
tenable_vulnerabilities_settings_config_instance = TenableVulnerabilitiesSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(TenableVulnerabilitiesSettingsConfig.to_json())

# convert the object into a dict
tenable_vulnerabilities_settings_config_dict = tenable_vulnerabilities_settings_config_instance.to_dict()
# create an instance of TenableVulnerabilitiesSettingsConfig from a dict
tenable_vulnerabilities_settings_config_from_dict = TenableVulnerabilitiesSettingsConfig.from_dict(tenable_vulnerabilities_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


