# WazuhSettingsConfig

Wazuh Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_mode** | **str** | Not exposed in the config meta; present only to reject AWS role auth submitted via the API. | [optional] 
**index** | **str** | The name of the index to write to. | 
**insecure_skip_verify** | **bool** | Whether to skip TLS certificate verification (not recommended for production). | [optional] 
**url** | **str** | The URL of the Wazuh indexer API (must start with https). | 
**username** | **str** | The username for authenticating with the Wazuh indexer. | 

## Example

```python
from monad.models.wazuh_settings_config import WazuhSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of WazuhSettingsConfig from a JSON string
wazuh_settings_config_instance = WazuhSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(WazuhSettingsConfig.to_json())

# convert the object into a dict
wazuh_settings_config_dict = wazuh_settings_config_instance.to_dict()
# create an instance of WazuhSettingsConfig from a dict
wazuh_settings_config_from_dict = WazuhSettingsConfig.from_dict(wazuh_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


