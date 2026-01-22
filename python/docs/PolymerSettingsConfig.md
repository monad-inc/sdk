# PolymerSettingsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_name** | **str** | TODO: Name of domain added on Polymer Hub portal | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.polymer_settings_config import PolymerSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PolymerSettingsConfig from a JSON string
polymer_settings_config_instance = PolymerSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(PolymerSettingsConfig.to_json())

# convert the object into a dict
polymer_settings_config_dict = polymer_settings_config_instance.to_dict()
# create an instance of PolymerSettingsConfig from a dict
polymer_settings_config_from_dict = PolymerSettingsConfig.from_dict(polymer_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


