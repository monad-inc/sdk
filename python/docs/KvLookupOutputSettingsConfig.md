# KvLookupOutputSettingsConfig

KV Lookup Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_field** | **str** | The field in the incoming record to use as the key | [optional] 
**ttl** | **int** | Time-to-live in hours for stored key-value pairs (0 means no expiration) | [optional] 
**value_field** | **str** | The field in the incoming record to use as the value | [optional] 

## Example

```python
from monad.models.kv_lookup_output_settings_config import KvLookupOutputSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of KvLookupOutputSettingsConfig from a JSON string
kv_lookup_output_settings_config_instance = KvLookupOutputSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(KvLookupOutputSettingsConfig.to_json())

# convert the object into a dict
kv_lookup_output_settings_config_dict = kv_lookup_output_settings_config_instance.to_dict()
# create an instance of KvLookupOutputSettingsConfig from a dict
kv_lookup_output_settings_config_from_dict = KvLookupOutputSettingsConfig.from_dict(kv_lookup_output_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


