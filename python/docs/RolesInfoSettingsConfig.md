# RolesInfoSettingsConfig

CrowdStrike EDR roles info settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_type** | **str** | Your cloud type for CrowdStrike. Ex: &#39;autodiscover&#39;, &#39;us-1&#39;, &#39;us-2&#39;, &#39;eu-1&#39;, &#39;us-gov-1&#39;. | [optional] 
**cron** | **str** | Cron string for scheduling the ingest of your input | [optional] 

## Example

```python
from monad.models.roles_info_settings_config import RolesInfoSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RolesInfoSettingsConfig from a JSON string
roles_info_settings_config_instance = RolesInfoSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(RolesInfoSettingsConfig.to_json())

# convert the object into a dict
roles_info_settings_config_dict = roles_info_settings_config_instance.to_dict()
# create an instance of RolesInfoSettingsConfig from a dict
roles_info_settings_config_from_dict = RolesInfoSettingsConfig.from_dict(roles_info_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


