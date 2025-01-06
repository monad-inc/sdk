# ModelsRoleList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**roles** | [**List[ModelsRole]**](ModelsRole.md) |  | [optional] 

## Example

```python
from monad.models.models_role_list import ModelsRoleList

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsRoleList from a JSON string
models_role_list_instance = ModelsRoleList.from_json(json)
# print the JSON string representation of the object
print(ModelsRoleList.to_json())

# convert the object into a dict
models_role_list_dict = models_role_list_instance.to_dict()
# create an instance of ModelsRoleList from a dict
models_role_list_from_dict = ModelsRoleList.from_dict(models_role_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


