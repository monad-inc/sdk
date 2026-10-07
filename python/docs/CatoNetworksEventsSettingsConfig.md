# CatoNetworksEventsSettingsConfig

Cato Networks settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | ID of account for which the events need to be fetched | [optional] 
**rate_limit** | [**ModelsInputRateLimit**](ModelsInputRateLimit.md) |  | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.cato_networks_events_settings_config import CatoNetworksEventsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CatoNetworksEventsSettingsConfig from a JSON string
cato_networks_events_settings_config_instance = CatoNetworksEventsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(CatoNetworksEventsSettingsConfig.to_json())

# convert the object into a dict
cato_networks_events_settings_config_dict = cato_networks_events_settings_config_instance.to_dict()
# create an instance of CatoNetworksEventsSettingsConfig from a dict
cato_networks_events_settings_config_from_dict = CatoNetworksEventsSettingsConfig.from_dict(cato_networks_events_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


