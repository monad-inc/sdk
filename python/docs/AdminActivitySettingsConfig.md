# AdminActivitySettingsConfig

Google Workspace Admin Activity settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_type** | **str** | Authentication type (service_account or oauth) | [optional] 
**email** | **str** | Email address to use for authenticating with Google Cloud. | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.admin_activity_settings_config import AdminActivitySettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AdminActivitySettingsConfig from a JSON string
admin_activity_settings_config_instance = AdminActivitySettingsConfig.from_json(json)
# print the JSON string representation of the object
print(AdminActivitySettingsConfig.to_json())

# convert the object into a dict
admin_activity_settings_config_dict = admin_activity_settings_config_instance.to_dict()
# create an instance of AdminActivitySettingsConfig from a dict
admin_activity_settings_config_from_dict = AdminActivitySettingsConfig.from_dict(admin_activity_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


