# RoutesCreateRoleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**name** | **str** |  | 
**pipeline_create** | **bool** |  | [optional] 
**pipeline_delete** | **bool** |  | [optional] 
**pipeline_read** | **bool** |  | [optional] 
**pipeline_update** | **bool** |  | [optional] 

## Example

```python
from monad.models.routes_create_role_request import RoutesCreateRoleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesCreateRoleRequest from a JSON string
routes_create_role_request_instance = RoutesCreateRoleRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesCreateRoleRequest.to_json())

# convert the object into a dict
routes_create_role_request_dict = routes_create_role_request_instance.to_dict()
# create an instance of RoutesCreateRoleRequest from a dict
routes_create_role_request_from_dict = RoutesCreateRoleRequest.from_dict(routes_create_role_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


