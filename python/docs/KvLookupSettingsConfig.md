# KvLookupSettingsConfig

KVLookup enrichment settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_key** | **str** | DestinationKey is the path where the result will be stored in the record | [optional] 
**error_on_missing_key** | **bool** | ErrorOnMissingKey If true, throw an error when key is not found in the KV store | [optional] 
**join_path** | **str** | JoinPath is the path to a field whose values will be used as the lookup keys | [optional] 
**kv_lookup_output_id** | **str** | KVLookupOutputID is the id of the KV lookup output to join with | [optional] 
**no_match_response** | **str** | NoMatchResponse is the value to add to the record when no match is found | [optional] 

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


