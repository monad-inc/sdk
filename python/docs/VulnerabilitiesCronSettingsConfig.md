# VulnerabilitiesCronSettingsConfig

CrowdStrike EDR vulnerabilities settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_type** | **str** | Your cloud type for CrowdStrike. Ex: &#39;autodiscover&#39;, &#39;us-1&#39;, &#39;us-2&#39;, &#39;eu-1&#39;, &#39;us-gov-1&#39;. | [optional] 
**cron** | **str** | Cron expression to schedule the data collection. | [optional] 

## Example

```python
from monad.models.vulnerabilities_cron_settings_config import VulnerabilitiesCronSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VulnerabilitiesCronSettingsConfig from a JSON string
vulnerabilities_cron_settings_config_instance = VulnerabilitiesCronSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(VulnerabilitiesCronSettingsConfig.to_json())

# convert the object into a dict
vulnerabilities_cron_settings_config_dict = vulnerabilities_cron_settings_config_instance.to_dict()
# create an instance of VulnerabilitiesCronSettingsConfig from a dict
vulnerabilities_cron_settings_config_from_dict = VulnerabilitiesCronSettingsConfig.from_dict(vulnerabilities_cron_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


