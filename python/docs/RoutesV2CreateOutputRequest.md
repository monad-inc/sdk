# RoutesV2CreateOutputRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**RoutesV2OutputConfig**](RoutesV2OutputConfig.md) |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**output_type** | **str** |  | [optional] 
**promise_id** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_v2_create_output_request import RoutesV2CreateOutputRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2CreateOutputRequest from a JSON string
routes_v2_create_output_request_instance = RoutesV2CreateOutputRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesV2CreateOutputRequest.to_json())

# convert the object into a dict
routes_v2_create_output_request_dict = routes_v2_create_output_request_instance.to_dict()
# create an instance of RoutesV2CreateOutputRequest from a dict
routes_v2_create_output_request_from_dict = RoutesV2CreateOutputRequest.from_dict(routes_v2_create_output_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


