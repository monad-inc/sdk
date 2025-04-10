# SplunkSettingsConfig

Splunk Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_insecure** | **bool** | Whether to allow insecure connections (not recommended for production). | [optional] 
**index** | **str** | The index you want to send data to. If left empty, data is sent to the default index associated with the token. If specified, please read our docs for more context on Splunk token &amp; Index scoping. | [optional] 
**port** | **str** | The port of the Splunk instance. | [optional] 
**to_create** | **bool** | Ensure this is selected if you want Monad to create the index for you. If you are using a pre-existing index, please leave this deselected. Read our docs for more context on Splunk token &amp; Index scoping. | [optional] 
**url** | **str** | The URL of the Splunk instance (must start with http or https). | [optional] 
**username** | **str** | Represents an administrative account to manage indices. Used to create an index, hence can be left empty if default index is to be used. | [optional] 

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


