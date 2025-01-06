# RoutesCreateOutputRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**ModelsOutputConfig**](ModelsOutputConfig.md) |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | 
**output_type** | **str** |  | 
**promise_id** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_create_output_request import RoutesCreateOutputRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesCreateOutputRequest from a JSON string
routes_create_output_request_instance = RoutesCreateOutputRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesCreateOutputRequest.to_json())

# convert the object into a dict
routes_create_output_request_dict = routes_create_output_request_instance.to_dict()
# create an instance of RoutesCreateOutputRequest from a dict
routes_create_output_request_from_dict = RoutesCreateOutputRequest.from_dict(routes_create_output_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


