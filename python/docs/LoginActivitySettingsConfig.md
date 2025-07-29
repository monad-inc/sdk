# LoginActivitySettingsConfig

Google Workspace Login Activity settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_type** | **str** | Authentication type (service_account or oauth) | [optional] 
**email** | **str** | Email address to use for authenticating with Google Cloud (required for service_account auth). | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.login_activity_settings_config import LoginActivitySettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of LoginActivitySettingsConfig from a JSON string
login_activity_settings_config_instance = LoginActivitySettingsConfig.from_json(json)
# print the JSON string representation of the object
print(LoginActivitySettingsConfig.to_json())

# convert the object into a dict
login_activity_settings_config_dict = login_activity_settings_config_instance.to_dict()
# create an instance of LoginActivitySettingsConfig from a dict
login_activity_settings_config_from_dict = LoginActivitySettingsConfig.from_dict(login_activity_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


