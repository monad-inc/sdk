# RoutesV3KvEntryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_updated_at** | **str** |  | [optional] 
**value** | **object** |  | [optional] 

## Example

```python
from monad.models.routes_v3_kv_entry_response import RoutesV3KvEntryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3KvEntryResponse from a JSON string
routes_v3_kv_entry_response_instance = RoutesV3KvEntryResponse.from_json(json)
# print the JSON string representation of the object
print(RoutesV3KvEntryResponse.to_json())

# convert the object into a dict
routes_v3_kv_entry_response_dict = routes_v3_kv_entry_response_instance.to_dict()
# create an instance of RoutesV3KvEntryResponse from a dict
routes_v3_kv_entry_response_from_dict = RoutesV3KvEntryResponse.from_dict(routes_v3_kv_entry_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


