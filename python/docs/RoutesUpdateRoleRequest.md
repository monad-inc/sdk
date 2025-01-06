# RoutesUpdateRoleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**pipeline_create** | **bool** |  | [optional] 
**pipeline_delete** | **bool** |  | [optional] 
**pipeline_read** | **bool** |  | [optional] 
**pipeline_update** | **bool** |  | [optional] 

## Example

```python
from monad.models.routes_update_role_request import RoutesUpdateRoleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesUpdateRoleRequest from a JSON string
routes_update_role_request_instance = RoutesUpdateRoleRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesUpdateRoleRequest.to_json())

# convert the object into a dict
routes_update_role_request_dict = routes_update_role_request_instance.to_dict()
# create an instance of RoutesUpdateRoleRequest from a dict
routes_update_role_request_from_dict = RoutesUpdateRoleRequest.from_dict(routes_update_role_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


