# DefenderForEndpointAlertsSettingsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** |  | [optional] 
**severity** | **str** |  | [optional] 
**tenant_id** | **str** |  | [optional] 

## Example

```python
from monad.models.defender_for_endpoint_alerts_settings_config import DefenderForEndpointAlertsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DefenderForEndpointAlertsSettingsConfig from a JSON string
defender_for_endpoint_alerts_settings_config_instance = DefenderForEndpointAlertsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(DefenderForEndpointAlertsSettingsConfig.to_json())

# convert the object into a dict
defender_for_endpoint_alerts_settings_config_dict = defender_for_endpoint_alerts_settings_config_instance.to_dict()
# create an instance of DefenderForEndpointAlertsSettingsConfig from a dict
defender_for_endpoint_alerts_settings_config_from_dict = DefenderForEndpointAlertsSettingsConfig.from_dict(defender_for_endpoint_alerts_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


