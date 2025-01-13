# RoutesCreateInputRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**ModelsInputConfig**](ModelsInputConfig.md) |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from monad.models.routes_create_input_request import RoutesCreateInputRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesCreateInputRequest from a JSON string
routes_create_input_request_instance = RoutesCreateInputRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesCreateInputRequest.to_json())

# convert the object into a dict
routes_create_input_request_dict = routes_create_input_request_instance.to_dict()
# create an instance of RoutesCreateInputRequest from a dict
routes_create_input_request_from_dict = RoutesCreateInputRequest.from_dict(routes_create_input_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


