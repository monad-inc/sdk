# ModelsPermission


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**slug** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 

## Example

```python
from monad.models.models_permission import ModelsPermission

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsPermission from a JSON string
models_permission_instance = ModelsPermission.from_json(json)
# print the JSON string representation of the object
print(ModelsPermission.to_json())

# convert the object into a dict
models_permission_dict = models_permission_instance.to_dict()
# create an instance of ModelsPermission from a dict
models_permission_from_dict = ModelsPermission.from_dict(models_permission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


