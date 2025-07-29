# TailscaleUsersSettingsConfig

Tailscale Users settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | **str** | Cron expression for scheduling the input | [optional] 
**organization_id** | **str** | The tailnet organization name. Defaults to \&quot;-\&quot; to reference the default organization. | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 
**user_role_option** | **str** | Allows for filtering the output by user role. | [optional] 
**user_type_option** | **str** | Allows for filtering the output by user type. | [optional] 

## Example

```python
from monad.models.tailscale_users_settings_config import TailscaleUsersSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TailscaleUsersSettingsConfig from a JSON string
tailscale_users_settings_config_instance = TailscaleUsersSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(TailscaleUsersSettingsConfig.to_json())

# convert the object into a dict
tailscale_users_settings_config_dict = tailscale_users_settings_config_instance.to_dict()
# create an instance of TailscaleUsersSettingsConfig from a dict
tailscale_users_settings_config_from_dict = TailscaleUsersSettingsConfig.from_dict(tailscale_users_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


