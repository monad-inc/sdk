# RoutesV2TestInputConnectionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**ModelsInputConfig**](ModelsInputConfig.md) |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_v2_test_input_connection_request import RoutesV2TestInputConnectionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2TestInputConnectionRequest from a JSON string
routes_v2_test_input_connection_request_instance = RoutesV2TestInputConnectionRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesV2TestInputConnectionRequest.to_json())

# convert the object into a dict
routes_v2_test_input_connection_request_dict = routes_v2_test_input_connection_request_instance.to_dict()
# create an instance of RoutesV2TestInputConnectionRequest from a dict
routes_v2_test_input_connection_request_from_dict = RoutesV2TestInputConnectionRequest.from_dict(routes_v2_test_input_connection_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


