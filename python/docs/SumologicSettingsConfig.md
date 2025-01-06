# SumologicSettingsConfig

Sumo Logic Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | The URL of the Sumo Logic instance. | [optional] 

## Example

```python
from monad.models.sumologic_settings_config import SumologicSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SumologicSettingsConfig from a JSON string
sumologic_settings_config_instance = SumologicSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(SumologicSettingsConfig.to_json())

# convert the object into a dict
sumologic_settings_config_dict = sumologic_settings_config_instance.to_dict()
# create an instance of SumologicSettingsConfig from a dict
sumologic_settings_config_from_dict = SumologicSettingsConfig.from_dict(sumologic_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


