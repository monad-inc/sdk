# VulnerabilitiesSettingsConfig

CrowdStrike EDR vulnerabilities settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_type** | **str** | Your cloud type for CrowdStrike. Ex: &#39;autodiscover&#39;, &#39;us-1&#39;, &#39;us-2&#39;, &#39;eu-1&#39;, &#39;us-gov-1&#39;. | [optional] 

## Example

```python
from monad.models.vulnerabilities_settings_config import VulnerabilitiesSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VulnerabilitiesSettingsConfig from a JSON string
vulnerabilities_settings_config_instance = VulnerabilitiesSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(VulnerabilitiesSettingsConfig.to_json())

# convert the object into a dict
vulnerabilities_settings_config_dict = vulnerabilities_settings_config_instance.to_dict()
# create an instance of VulnerabilitiesSettingsConfig from a dict
vulnerabilities_settings_config_from_dict = VulnerabilitiesSettingsConfig.from_dict(vulnerabilities_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


