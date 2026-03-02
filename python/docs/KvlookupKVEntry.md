# KvlookupKVEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_updated_at** | **str** |  | [optional] 
**value** | **List[int]** |  | [optional] 

## Example

```python
from monad.models.kvlookup_kv_entry import KvlookupKVEntry

# TODO update the JSON string below
json = "{}"
# create an instance of KvlookupKVEntry from a JSON string
kvlookup_kv_entry_instance = KvlookupKVEntry.from_json(json)
# print the JSON string representation of the object
print(KvlookupKVEntry.to_json())

# convert the object into a dict
kvlookup_kv_entry_dict = kvlookup_kv_entry_instance.to_dict()
# create an instance of KvlookupKVEntry from a dict
kvlookup_kv_entry_from_dict = KvlookupKVEntry.from_dict(kvlookup_kv_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


