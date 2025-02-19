# RoutesV2CreateInputRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_v2_create_input_request import RoutesV2CreateInputRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2CreateInputRequest from a JSON string
routes_v2_create_input_request_instance = RoutesV2CreateInputRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesV2CreateInputRequest.to_json())

# convert the object into a dict
routes_v2_create_input_request_dict = routes_v2_create_input_request_instance.to_dict()
# create an instance of RoutesV2CreateInputRequest from a dict
routes_v2_create_input_request_from_dict = RoutesV2CreateInputRequest.from_dict(routes_v2_create_input_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


