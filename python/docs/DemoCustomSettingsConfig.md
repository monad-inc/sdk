# DemoCustomSettingsConfig

Demo Custom settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_template** | **str** | A custom template using the functions we provide to generate demo data | [optional] 
**rate** | **int** | The rate at which to generate records (between 1 and 1000) per second | [optional] 

## Example

```python
from monad.models.demo_custom_settings_config import DemoCustomSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DemoCustomSettingsConfig from a JSON string
demo_custom_settings_config_instance = DemoCustomSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(DemoCustomSettingsConfig.to_json())

# convert the object into a dict
demo_custom_settings_config_dict = demo_custom_settings_config_instance.to_dict()
# create an instance of DemoCustomSettingsConfig from a dict
demo_custom_settings_config_from_dict = DemoCustomSettingsConfig.from_dict(demo_custom_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


