# KvLookupSettingsConfig

KVLookup enrichment settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_key** | **str** | DestinationKey the path where the result will be stored in the record. Use &#39;.&#39; for the root object, &#39;field.subfield&#39; for nested properties, &#39;array[0]&#39; for array elements, or combined paths like &#39;users[0].name&#39;. | [optional] 
**error_on_missing_key** | **bool** | ErrorOnMissingKey if true, will throw an error if the key is not found in the KV lookup output | [optional] 
**join_key** | **str** | JoinKey is the key in the record whose value will be used to join with the KV lookup output | [optional] 
**kv_lookup_output_id** | **str** | KVLookupOutputID is the ID of the KV lookup output to join with | [optional] 

## Example

```python
from monad.models.kv_lookup_settings_config import KvLookupSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of KvLookupSettingsConfig from a JSON string
kv_lookup_settings_config_instance = KvLookupSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(KvLookupSettingsConfig.to_json())

# convert the object into a dict
kv_lookup_settings_config_dict = kv_lookup_settings_config_instance.to_dict()
# create an instance of KvLookupSettingsConfig from a dict
kv_lookup_settings_config_from_dict = KvLookupSettingsConfig.from_dict(kv_lookup_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


