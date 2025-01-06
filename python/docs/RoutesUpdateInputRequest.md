# RoutesUpdateInputRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**RoutesUpdateInputRequestConfig**](RoutesUpdateInputRequestConfig.md) |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**type** | **str** |  | 

## Example

```python
from monad.models.routes_update_input_request import RoutesUpdateInputRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesUpdateInputRequest from a JSON string
routes_update_input_request_instance = RoutesUpdateInputRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesUpdateInputRequest.to_json())

# convert the object into a dict
routes_update_input_request_dict = routes_update_input_request_instance.to_dict()
# create an instance of RoutesUpdateInputRequest from a dict
routes_update_input_request_from_dict = RoutesUpdateInputRequest.from_dict(routes_update_input_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


