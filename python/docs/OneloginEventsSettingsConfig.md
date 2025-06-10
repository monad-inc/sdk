# OneloginEventsSettingsConfig

Onelogin Events settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subdomain** | **str** | SubDomain is a placeholder that represents your specific OneLogin subdomain. | [optional] 

## Example

```python
from monad.models.onelogin_events_settings_config import OneloginEventsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of OneloginEventsSettingsConfig from a JSON string
onelogin_events_settings_config_instance = OneloginEventsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(OneloginEventsSettingsConfig.to_json())

# convert the object into a dict
onelogin_events_settings_config_dict = onelogin_events_settings_config_instance.to_dict()
# create an instance of OneloginEventsSettingsConfig from a dict
onelogin_events_settings_config_from_dict = OneloginEventsSettingsConfig.from_dict(onelogin_events_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


