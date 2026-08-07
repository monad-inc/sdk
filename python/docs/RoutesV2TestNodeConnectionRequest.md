# RoutesV2TestNodeConnectionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**component_type** | [**ModelsComponentType**](ModelsComponentType.md) |  | [optional] 
**config** | [**RoutesV2TestNodeConfig**](RoutesV2TestNodeConfig.md) |  | [optional] 
**type** | **str** | connector subtype (e.g. \&quot;s3\&quot;) | [optional] 
**version** | **int** |  | [optional] 

## Example

```python
from monad.models.routes_v2_test_node_connection_request import RoutesV2TestNodeConnectionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2TestNodeConnectionRequest from a JSON string
routes_v2_test_node_connection_request_instance = RoutesV2TestNodeConnectionRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesV2TestNodeConnectionRequest.to_json())

# convert the object into a dict
routes_v2_test_node_connection_request_dict = routes_v2_test_node_connection_request_instance.to_dict()
# create an instance of RoutesV2TestNodeConnectionRequest from a dict
routes_v2_test_node_connection_request_from_dict = RoutesV2TestNodeConnectionRequest.from_dict(routes_v2_test_node_connection_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


