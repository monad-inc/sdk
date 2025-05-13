# RoutesV2UpdateInputRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**SecretProcessesorInputConfig**](SecretProcessesorInputConfig.md) |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_v2_update_input_request import RoutesV2UpdateInputRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2UpdateInputRequest from a JSON string
routes_v2_update_input_request_instance = RoutesV2UpdateInputRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesV2UpdateInputRequest.to_json())

# convert the object into a dict
routes_v2_update_input_request_dict = routes_v2_update_input_request_instance.to_dict()
# create an instance of RoutesV2UpdateInputRequest from a dict
routes_v2_update_input_request_from_dict = RoutesV2UpdateInputRequest.from_dict(routes_v2_update_input_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


