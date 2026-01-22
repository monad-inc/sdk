# RoutesUserWithRoles


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_provider** | [**RoutesUserAuthProvider**](RoutesUserAuthProvider.md) |  | [optional] 
**created_at** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**organization_roles** | [**Dict[str, ModelsUserRoleWithPermissions]**](ModelsUserRoleWithPermissions.md) |  | [optional] 
**updated_at** | **str** |  | [optional] 
**username** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_user_with_roles import RoutesUserWithRoles

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesUserWithRoles from a JSON string
routes_user_with_roles_instance = RoutesUserWithRoles.from_json(json)
# print the JSON string representation of the object
print(RoutesUserWithRoles.to_json())

# convert the object into a dict
routes_user_with_roles_dict = routes_user_with_roles_instance.to_dict()
# create an instance of RoutesUserWithRoles from a dict
routes_user_with_roles_from_dict = RoutesUserWithRoles.from_dict(routes_user_with_roles_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


