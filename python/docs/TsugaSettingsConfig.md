# TsugaSettingsConfig

Tsuga Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint** | **str** | Base URL of the Tsuga cluster&#39;s intake, e.g. https://intake.&lt;cluster&gt;.tsuga.com | 

## Example

```python
from monad.models.tsuga_settings_config import TsugaSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TsugaSettingsConfig from a JSON string
tsuga_settings_config_instance = TsugaSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(TsugaSettingsConfig.to_json())

# convert the object into a dict
tsuga_settings_config_dict = tsuga_settings_config_instance.to_dict()
# create an instance of TsugaSettingsConfig from a dict
tsuga_settings_config_from_dict = TsugaSettingsConfig.from_dict(tsuga_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


