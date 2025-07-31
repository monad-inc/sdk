# RoutesV3CreateConnectionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**AuthenticationtypesConnectionConfig**](AuthenticationtypesConnectionConfig.md) |  | [optional] 
**description** | **str** | Description of the connection | [optional] 
**name** | **str** | Name of the connection | [optional] 

## Example

```python
from monad.models.routes_v3_create_connection_request import RoutesV3CreateConnectionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3CreateConnectionRequest from a JSON string
routes_v3_create_connection_request_instance = RoutesV3CreateConnectionRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesV3CreateConnectionRequest.to_json())

# convert the object into a dict
routes_v3_create_connection_request_dict = routes_v3_create_connection_request_instance.to_dict()
# create an instance of RoutesV3CreateConnectionRequest from a dict
routes_v3_create_connection_request_from_dict = RoutesV3CreateConnectionRequest.from_dict(routes_v3_create_connection_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


