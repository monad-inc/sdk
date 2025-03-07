# ModelsRoleWithPermissionsList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**roles** | [**List[ModelsRoleWithPermissions]**](ModelsRoleWithPermissions.md) |  | [optional] 

## Example

```python
from monad.models.models_role_with_permissions_list import ModelsRoleWithPermissionsList

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsRoleWithPermissionsList from a JSON string
models_role_with_permissions_list_instance = ModelsRoleWithPermissionsList.from_json(json)
# print the JSON string representation of the object
print(ModelsRoleWithPermissionsList.to_json())

# convert the object into a dict
models_role_with_permissions_list_dict = models_role_with_permissions_list_instance.to_dict()
# create an instance of ModelsRoleWithPermissionsList from a dict
models_role_with_permissions_list_from_dict = ModelsRoleWithPermissionsList.from_dict(models_role_with_permissions_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


