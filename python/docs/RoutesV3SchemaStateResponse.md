# RoutesV3SchemaStateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**edge_id** | **str** |  | [optional] 
**learning_start** | **str** |  | [optional] 
**mode** | **str** |  | [optional] 
**pipeline_id** | **str** |  | [optional] 
**var_schema** | [**Dict[str, RoutesV3FieldStateResponse]**](RoutesV3FieldStateResponse.md) |  | [optional] 
**total_records_observed** | **int** |  | [optional] 
**updated_at** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_v3_schema_state_response import RoutesV3SchemaStateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3SchemaStateResponse from a JSON string
routes_v3_schema_state_response_instance = RoutesV3SchemaStateResponse.from_json(json)
# print the JSON string representation of the object
print(RoutesV3SchemaStateResponse.to_json())

# convert the object into a dict
routes_v3_schema_state_response_dict = routes_v3_schema_state_response_instance.to_dict()
# create an instance of RoutesV3SchemaStateResponse from a dict
routes_v3_schema_state_response_from_dict = RoutesV3SchemaStateResponse.from_dict(routes_v3_schema_state_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


