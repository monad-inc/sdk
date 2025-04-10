# DevicesSettingsConfig

Tailscale Devices settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | **str** | Cron expression for scheduling the input | [optional] 
**field_option** | **str** |  | [optional] 
**organization_id** | **str** | The tailnet organization name. Defaults to \&quot;-\&quot; to reference the default organization. | [optional] 

## Example

```python
from monad.models.devices_settings_config import DevicesSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DevicesSettingsConfig from a JSON string
devices_settings_config_instance = DevicesSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(DevicesSettingsConfig.to_json())

# convert the object into a dict
devices_settings_config_dict = devices_settings_config_instance.to_dict()
# create an instance of DevicesSettingsConfig from a dict
devices_settings_config_from_dict = DevicesSettingsConfig.from_dict(devices_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


