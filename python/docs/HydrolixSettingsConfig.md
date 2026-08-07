# HydrolixSettingsConfig

Hydrolix Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth** | [**HydrolixAuthConfig**](HydrolixAuthConfig.md) |  | 
**host** | **str** | The hostname of the Hydrolix cluster (no scheme). Example: mycluster.hydrolix.live. | 
**table** | **str** | The fully-qualified target table in the form &#x60;project.table&#x60;. Sent as the &#x60;X-Hdx-Table&#x60; header on &#x60;/ingest/event&#x60;. | 
**token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**transform** | **str** | Optional transform schema Hydrolix should apply when handling payloads. Sent as the &#x60;X-Hdx-Transform&#x60; header. | [optional] 

## Example

```python
from monad.models.hydrolix_settings_config import HydrolixSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of HydrolixSettingsConfig from a JSON string
hydrolix_settings_config_instance = HydrolixSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(HydrolixSettingsConfig.to_json())

# convert the object into a dict
hydrolix_settings_config_dict = hydrolix_settings_config_instance.to_dict()
# create an instance of HydrolixSettingsConfig from a dict
hydrolix_settings_config_from_dict = HydrolixSettingsConfig.from_dict(hydrolix_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


