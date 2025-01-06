# SplunkSettingsConfig

Splunk Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_insecure** | **bool** | Whether to allow insecure connections (not recommended for production). | [optional] 
**port** | **str** | The port of the Splunk instance. | [optional] 
**url** | **str** | The URL of the Splunk instance (must start with http or https). | [optional] 

## Example

```python
from monad.models.splunk_settings_config import SplunkSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SplunkSettingsConfig from a JSON string
splunk_settings_config_instance = SplunkSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(SplunkSettingsConfig.to_json())

# convert the object into a dict
splunk_settings_config_dict = splunk_settings_config_instance.to_dict()
# create an instance of SplunkSettingsConfig from a dict
splunk_settings_config_from_dict = SplunkSettingsConfig.from_dict(splunk_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


