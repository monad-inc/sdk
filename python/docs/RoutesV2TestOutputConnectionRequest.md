# RoutesV2TestOutputConnectionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**RoutesV2OutputConfig**](RoutesV2OutputConfig.md) |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_v2_test_output_connection_request import RoutesV2TestOutputConnectionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2TestOutputConnectionRequest from a JSON string
routes_v2_test_output_connection_request_instance = RoutesV2TestOutputConnectionRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesV2TestOutputConnectionRequest.to_json())

# convert the object into a dict
routes_v2_test_output_connection_request_dict = routes_v2_test_output_connection_request_instance.to_dict()
# create an instance of RoutesV2TestOutputConnectionRequest from a dict
routes_v2_test_output_connection_request_from_dict = RoutesV2TestOutputConnectionRequest.from_dict(routes_v2_test_output_connection_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


