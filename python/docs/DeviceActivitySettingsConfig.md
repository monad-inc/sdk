# DeviceActivitySettingsConfig

Google Workspace Device Activity settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_type** | **str** | Authentication type (service_account or oauth) | [optional] 
**email** | **str** | Email address to use for authenticating with Google Cloud (required for service_account auth). | [optional] 

## Example

```python
from monad.models.device_activity_settings_config import DeviceActivitySettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceActivitySettingsConfig from a JSON string
device_activity_settings_config_instance = DeviceActivitySettingsConfig.from_json(json)
# print the JSON string representation of the object
print(DeviceActivitySettingsConfig.to_json())

# convert the object into a dict
device_activity_settings_config_dict = device_activity_settings_config_instance.to_dict()
# create an instance of DeviceActivitySettingsConfig from a dict
device_activity_settings_config_from_dict = DeviceActivitySettingsConfig.from_dict(device_activity_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


