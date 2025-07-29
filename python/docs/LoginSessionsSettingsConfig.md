# LoginSessionsSettingsConfig

CrowdStrike EDR login sessions settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_type** | **str** | Your cloud type for CrowdStrike. Ex: &#39;autodiscover&#39;, &#39;us-1&#39;, &#39;us-2&#39;, &#39;eu-1&#39;, &#39;us-gov-1&#39;. | [optional] 
**cron** | **str** | Cron string for scheduling the ingest of your input | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.login_sessions_settings_config import LoginSessionsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of LoginSessionsSettingsConfig from a JSON string
login_sessions_settings_config_instance = LoginSessionsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(LoginSessionsSettingsConfig.to_json())

# convert the object into a dict
login_sessions_settings_config_dict = login_sessions_settings_config_instance.to_dict()
# create an instance of LoginSessionsSettingsConfig from a dict
login_sessions_settings_config_from_dict = LoginSessionsSettingsConfig.from_dict(login_sessions_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


