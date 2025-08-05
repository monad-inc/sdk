# RoutesV3UpdateConnectionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Connection Description to be updated | [optional] 
**name** | **str** | Connection Name to be updated | [optional] 

## Example

```python
from monad.models.routes_v3_update_connection_request import RoutesV3UpdateConnectionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3UpdateConnectionRequest from a JSON string
routes_v3_update_connection_request_instance = RoutesV3UpdateConnectionRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesV3UpdateConnectionRequest.to_json())

# convert the object into a dict
routes_v3_update_connection_request_dict = routes_v3_update_connection_request_instance.to_dict()
# create an instance of RoutesV3UpdateConnectionRequest from a dict
routes_v3_update_connection_request_from_dict = RoutesV3UpdateConnectionRequest.from_dict(routes_v3_update_connection_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


