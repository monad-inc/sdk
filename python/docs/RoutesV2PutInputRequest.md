# RoutesV2PutInputRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**SecretProcessesorInputConfig**](SecretProcessesorInputConfig.md) |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_v2_put_input_request import RoutesV2PutInputRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2PutInputRequest from a JSON string
routes_v2_put_input_request_instance = RoutesV2PutInputRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesV2PutInputRequest.to_json())

# convert the object into a dict
routes_v2_put_input_request_dict = routes_v2_put_input_request_instance.to_dict()
# create an instance of RoutesV2PutInputRequest from a dict
routes_v2_put_input_request_from_dict = RoutesV2PutInputRequest.from_dict(routes_v2_put_input_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


