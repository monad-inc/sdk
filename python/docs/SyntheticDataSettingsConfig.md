# SyntheticDataSettingsConfig

Demo settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rate** | **int** | The rate at which to generate records (between 1 and 1000) per second | [optional] 
**record_type** | **str** | The type of record to generate | [optional] 

## Example

```python
from monad.models.synthetic_data_settings_config import SyntheticDataSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SyntheticDataSettingsConfig from a JSON string
synthetic_data_settings_config_instance = SyntheticDataSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(SyntheticDataSettingsConfig.to_json())

# convert the object into a dict
synthetic_data_settings_config_dict = synthetic_data_settings_config_instance.to_dict()
# create an instance of SyntheticDataSettingsConfig from a dict
synthetic_data_settings_config_from_dict = SyntheticDataSettingsConfig.from_dict(synthetic_data_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


