# UniversalSettingsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_name** | **str** | Name of the ServiceNow instance | [optional] 
**streams** | **List[str]** | ServiceNow streams to fetch data from | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.universal_settings_config import UniversalSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of UniversalSettingsConfig from a JSON string
universal_settings_config_instance = UniversalSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(UniversalSettingsConfig.to_json())

# convert the object into a dict
universal_settings_config_dict = universal_settings_config_instance.to_dict()
# create an instance of UniversalSettingsConfig from a dict
universal_settings_config_from_dict = UniversalSettingsConfig.from_dict(universal_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


