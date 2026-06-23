# RoutesV3SchemaHistoryEntryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | [optional] 
**edge_id** | **str** |  | [optional] 
**event_tags** | **List[str]** |  | [optional] 
**id** | **str** |  | [optional] 
**var_schema** | [**Dict[str, RoutesV3FieldStateResponse]**](RoutesV3FieldStateResponse.md) |  | [optional] 

## Example

```python
from monad.models.routes_v3_schema_history_entry_response import RoutesV3SchemaHistoryEntryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3SchemaHistoryEntryResponse from a JSON string
routes_v3_schema_history_entry_response_instance = RoutesV3SchemaHistoryEntryResponse.from_json(json)
# print the JSON string representation of the object
print(RoutesV3SchemaHistoryEntryResponse.to_json())

# convert the object into a dict
routes_v3_schema_history_entry_response_dict = routes_v3_schema_history_entry_response_instance.to_dict()
# create an instance of RoutesV3SchemaHistoryEntryResponse from a dict
routes_v3_schema_history_entry_response_from_dict = RoutesV3SchemaHistoryEntryResponse.from_dict(routes_v3_schema_history_entry_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


