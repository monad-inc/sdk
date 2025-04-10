# NextGenSiemSettingsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint** | **str** |  | [optional] 

## Example

```python
from monad.models.next_gen_siem_settings_config import NextGenSiemSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of NextGenSiemSettingsConfig from a JSON string
next_gen_siem_settings_config_instance = NextGenSiemSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(NextGenSiemSettingsConfig.to_json())

# convert the object into a dict
next_gen_siem_settings_config_dict = next_gen_siem_settings_config_instance.to_dict()
# create an instance of NextGenSiemSettingsConfig from a dict
next_gen_siem_settings_config_from_dict = NextGenSiemSettingsConfig.from_dict(next_gen_siem_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


