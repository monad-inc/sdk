# SyntheticDataCustomSettingsConfig

Demo Custom settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_template** | **str** | A custom template using the functions we provide to generate demo data | [optional] 
**rate** | **int** | The rate at which to generate records (between 1 and 1000) per second | [optional] 

## Example

```python
from monad.models.synthetic_data_custom_settings_config import SyntheticDataCustomSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SyntheticDataCustomSettingsConfig from a JSON string
synthetic_data_custom_settings_config_instance = SyntheticDataCustomSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(SyntheticDataCustomSettingsConfig.to_json())

# convert the object into a dict
synthetic_data_custom_settings_config_dict = synthetic_data_custom_settings_config_instance.to_dict()
# create an instance of SyntheticDataCustomSettingsConfig from a dict
synthetic_data_custom_settings_config_from_dict = SyntheticDataCustomSettingsConfig.from_dict(synthetic_data_custom_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


