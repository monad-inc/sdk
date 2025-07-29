# ModelsUserRoleWithPermissions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organization_id** | **str** |  | [optional] 
**permissions** | [**List[ModelsPermission]**](ModelsPermission.md) |  | [optional] 
**role_id** | **str** |  | [optional] 
**role_name** | **str** |  | [optional] 

## Example

```python
from monad.models.models_user_role_with_permissions import ModelsUserRoleWithPermissions

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsUserRoleWithPermissions from a JSON string
models_user_role_with_permissions_instance = ModelsUserRoleWithPermissions.from_json(json)
# print the JSON string representation of the object
print(ModelsUserRoleWithPermissions.to_json())

# convert the object into a dict
models_user_role_with_permissions_dict = models_user_role_with_permissions_instance.to_dict()
# create an instance of ModelsUserRoleWithPermissions from a dict
models_user_role_with_permissions_from_dict = ModelsUserRoleWithPermissions.from_dict(models_user_role_with_permissions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


