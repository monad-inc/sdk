# UsersSettingsConfig

Google Workspace Users settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_type** | **str** | Authentication type (service_account or oauth) | [optional] 
**cron** | **str** | Cron expression to schedule the data collection. | [optional] 
**email** | **str** | Email address to use to authenticate with Google Cloud (required for service_account auth). | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.users_settings_config import UsersSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of UsersSettingsConfig from a JSON string
users_settings_config_instance = UsersSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(UsersSettingsConfig.to_json())

# convert the object into a dict
users_settings_config_dict = users_settings_config_instance.to_dict()
# create an instance of UsersSettingsConfig from a dict
users_settings_config_from_dict = UsersSettingsConfig.from_dict(users_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


