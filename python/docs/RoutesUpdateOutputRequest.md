# RoutesUpdateOutputRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**RoutesUpdateOutputRequestConfig**](RoutesUpdateOutputRequestConfig.md) |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**output_type** | **str** |  | 

## Example

```python
from monad.models.routes_update_output_request import RoutesUpdateOutputRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesUpdateOutputRequest from a JSON string
routes_update_output_request_instance = RoutesUpdateOutputRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesUpdateOutputRequest.to_json())

# convert the object into a dict
routes_update_output_request_dict = routes_update_output_request_instance.to_dict()
# create an instance of RoutesUpdateOutputRequest from a dict
routes_update_output_request_from_dict = RoutesUpdateOutputRequest.from_dict(routes_update_output_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


