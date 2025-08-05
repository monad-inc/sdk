# ClumioConsolidatedAlertsSettingsConfig

Clumio Alerts settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent_entity_id** | **str** | The system-generated ID of the parent entity that is associated with the primary entity affected by the alert. | [optional] 
**parent_entity_type** | **str** | The system-generated name of the parent entity that is associated with the primary entity affected by the alert. | [optional] 
**region** | **str** | The region associated with your Clumio account | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.clumio_consolidated_alerts_settings_config import ClumioConsolidatedAlertsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ClumioConsolidatedAlertsSettingsConfig from a JSON string
clumio_consolidated_alerts_settings_config_instance = ClumioConsolidatedAlertsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(ClumioConsolidatedAlertsSettingsConfig.to_json())

# convert the object into a dict
clumio_consolidated_alerts_settings_config_dict = clumio_consolidated_alerts_settings_config_instance.to_dict()
# create an instance of ClumioConsolidatedAlertsSettingsConfig from a dict
clumio_consolidated_alerts_settings_config_from_dict = ClumioConsolidatedAlertsSettingsConfig.from_dict(clumio_consolidated_alerts_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


