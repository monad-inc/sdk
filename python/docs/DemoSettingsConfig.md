# DemoSettingsConfig

Demo settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rate** | **int** | The rate at which to generate records (between 1 and 1000) per second | [optional] 
**record_type** | **str** | The type of record to generate | [optional] 

## Example

```python
from monad.models.demo_settings_config import DemoSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DemoSettingsConfig from a JSON string
demo_settings_config_instance = DemoSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(DemoSettingsConfig.to_json())

# convert the object into a dict
demo_settings_config_dict = demo_settings_config_instance.to_dict()
# create an instance of DemoSettingsConfig from a dict
demo_settings_config_from_dict = DemoSettingsConfig.from_dict(demo_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


