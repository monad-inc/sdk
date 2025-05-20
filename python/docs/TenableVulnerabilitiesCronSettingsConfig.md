# TenableVulnerabilitiesCronSettingsConfig

Tenable assets settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | **str** | Cron expression to schedule the data collection. | [optional] 

## Example

```python
from monad.models.tenable_vulnerabilities_cron_settings_config import TenableVulnerabilitiesCronSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TenableVulnerabilitiesCronSettingsConfig from a JSON string
tenable_vulnerabilities_cron_settings_config_instance = TenableVulnerabilitiesCronSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(TenableVulnerabilitiesCronSettingsConfig.to_json())

# convert the object into a dict
tenable_vulnerabilities_cron_settings_config_dict = tenable_vulnerabilities_cron_settings_config_instance.to_dict()
# create an instance of TenableVulnerabilitiesCronSettingsConfig from a dict
tenable_vulnerabilities_cron_settings_config_from_dict = TenableVulnerabilitiesCronSettingsConfig.from_dict(tenable_vulnerabilities_cron_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


