# ModelsPermissionList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**permissions** | [**List[GithubComMonadIncCorePkgTypesModelsPermission]**](GithubComMonadIncCorePkgTypesModelsPermission.md) |  | [optional] 

## Example

```python
from monad.models.models_permission_list import ModelsPermissionList

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsPermissionList from a JSON string
models_permission_list_instance = ModelsPermissionList.from_json(json)
# print the JSON string representation of the object
print(ModelsPermissionList.to_json())

# convert the object into a dict
models_permission_list_dict = models_permission_list_instance.to_dict()
# create an instance of ModelsPermissionList from a dict
models_permission_list_from_dict = ModelsPermissionList.from_dict(models_permission_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


