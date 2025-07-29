# UsersInfoSettingsConfig

CrowdStrike EDR users info settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_type** | **str** | Your cloud type for CrowdStrike. Ex: &#39;autodiscover&#39;, &#39;us-1&#39;, &#39;us-2&#39;, &#39;eu-1&#39;, &#39;us-gov-1&#39;. | [optional] 
**cron** | **str** | Cron string for scheduling the ingest of your input | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.users_info_settings_config import UsersInfoSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of UsersInfoSettingsConfig from a JSON string
users_info_settings_config_instance = UsersInfoSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(UsersInfoSettingsConfig.to_json())

# convert the object into a dict
users_info_settings_config_dict = users_info_settings_config_instance.to_dict()
# create an instance of UsersInfoSettingsConfig from a dict
users_info_settings_config_from_dict = UsersInfoSettingsConfig.from_dict(users_info_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


