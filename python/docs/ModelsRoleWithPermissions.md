# ModelsRoleWithPermissions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**permissions** | [**List[GithubComMonadIncCorePkgTypesModelsPermission]**](GithubComMonadIncCorePkgTypesModelsPermission.md) |  | [optional] 
**protected** | **bool** |  | [optional] 
**updated_at** | **str** |  | [optional] 

## Example

```python
from monad.models.models_role_with_permissions import ModelsRoleWithPermissions

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsRoleWithPermissions from a JSON string
models_role_with_permissions_instance = ModelsRoleWithPermissions.from_json(json)
# print the JSON string representation of the object
print(ModelsRoleWithPermissions.to_json())

# convert the object into a dict
models_role_with_permissions_dict = models_role_with_permissions_instance.to_dict()
# create an instance of ModelsRoleWithPermissions from a dict
models_role_with_permissions_from_dict = ModelsRoleWithPermissions.from_dict(models_role_with_permissions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


