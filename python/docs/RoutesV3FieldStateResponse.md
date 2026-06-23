# RoutesV3FieldStateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**first_seen** | **int** |  | [optional] 
**last_seen** | **int** |  | [optional] 
**types** | **List[str]** |  | [optional] 

## Example

```python
from monad.models.routes_v3_field_state_response import RoutesV3FieldStateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3FieldStateResponse from a JSON string
routes_v3_field_state_response_instance = RoutesV3FieldStateResponse.from_json(json)
# print the JSON string representation of the object
print(RoutesV3FieldStateResponse.to_json())

# convert the object into a dict
routes_v3_field_state_response_dict = routes_v3_field_state_response_instance.to_dict()
# create an instance of RoutesV3FieldStateResponse from a dict
routes_v3_field_state_response_from_dict = RoutesV3FieldStateResponse.from_dict(routes_v3_field_state_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


