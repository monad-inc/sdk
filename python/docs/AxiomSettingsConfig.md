# AxiomSettingsConfig

Axiom Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset** | **str** | Name of the Axiom dataset in which data will be written | [optional] 

## Example

```python
from monad.models.axiom_settings_config import AxiomSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AxiomSettingsConfig from a JSON string
axiom_settings_config_instance = AxiomSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(AxiomSettingsConfig.to_json())

# convert the object into a dict
axiom_settings_config_dict = axiom_settings_config_instance.to_dict()
# create an instance of AxiomSettingsConfig from a dict
axiom_settings_config_from_dict = AxiomSettingsConfig.from_dict(axiom_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


